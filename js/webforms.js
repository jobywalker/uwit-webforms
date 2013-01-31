// gets the underscore string stuff working
_.mixin(_.string.exports());

// namespacing
var webForms = {};

webForms.pathname = location.pathname;
webForms.host = location.host;
webForms.path;

if (webForms.pathname.indexOf('qunit') >= 0) {
    console.log('we\'re using qunit');
    webForms.path = '../';
} else {
    webForms.path = '';
}

//webForms.start = function () {
//    console.log('starting')
//    var requireUWNetID;
//    if (requireUWNetID === true) {
//        console.log('require netid is true')
//        webForms.displayForm();
//    } else if (requireUWNetID !== true ) {
//        console.log('require netid is false')
//        webForms.displayForm();
//    }
//};

webForms.getUser = function () { 
    var url = webForms.path + 'php/user-parcae.php',
        testUrl = webForms.path + 'test-files/user.json',
        result = null,
        user;

    console.log('host is ' + webForms.host)

    if (webForms.host !== 'rtdev.cac.washington.edu') {
        url = testUrl;
    }

    $.ajax({
        url: url,
        async: false,
        dataType: 'json',
        contentType: 'application/json',
        success: function(data, textStatus, jqXHR) {
            ajaxConsoleLog('getUser', textStatus, jqXHR);
            user = data.User;
            result = data;
            // console.log('webForms.getUser user is = ' + user.UWNetID);
            if (user === undefined) {
                return
            } else {
                $('#uw-netid').text(user.UWNetID);
                $('#user-name').val(user.Name);
                $('#user-uwnetid').val(user.UWNetID);
                $('#user-phone').val(user.PhoneNumbers.PhoneNumber);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            ajaxConsoleLog('getUser', textStatus, jqXHR);
            $('#uw-netid').text('?');
            $('.form-actions').remove();
            result = null;
        }
    });
    if (result === null) {
        result = "No UW NetID detected";
        return result;
    } else {
        return result.User;
    }    
};

webForms.user = webForms.getUser();

webForms.buildForm = function () {
    console.log('running buildForm')
    var form = getURLParameter('form'),
        configUrl = webForms.path + 'config/' + form + '.json';

    $('.help-text-toggle').click(function(){
        console.log('.help-text-toggle')
        $('#help-text').fadeToggle();
    });

    //console.log('running displayForm');
    $.ajax({
        url: configUrl,
        dataType: 'json',
        contentType: 'application/json',
        success: function (data, textStatus, jqXHR) {
            ajaxConsoleLog('buildForm', textStatus, jqXHR);
            // console.log('data for displayForm = ' + data);
            //webForms.buildForm(data);
            var json = data,
                html = '',
                input = '';

            $('h1').append(json.formName);
            $('#submit-form').click(function() {
                webForms.createTicket(json.formQueue);
            });
            
            $.each(json.formFieldsets, function(key, value){
                //console.log('formFieldsets : key = ' + key + ', value = ' + value);
                html += '<fieldset><legend>' + value.legend + '</legend><div>';
                $.each(value.fields, function(k, v){
                    //console.log('k = ' + k + ', v = ' + v);
                    if (v.inputType === 'textarea') {
                        input = '<textarea rows="5"></textarea>';
                    } else if (v.inputType === 'select') {
                        var options;
                        $.each(v.selectOptions, function(i,option){  
                            options += '<option>' + option + '</option>';
                        })
                        input = '<select><option>Please Select</option>' + options + '</select>';
                    } else {
                        input = '<input type="' + v.inputType +'" id="something" placeholder="' + v.placeholder + '"><span  class="help-inline help-popover" title="' + v.name + '" data-content="' + v.popOverText + '"> <i class="icon-question-sign"></i></span>' + 
                            '<span class="help-block">' + v.helpText + '</span>';
                    }
                    html += '<label for="input' + v.id + '">' + v.name + '</label>' + input;
                });
                html += '</div></fieldset><br/>';
            });
            // append all the HTML as one big lump for effiency; yes, this is more efficient
            $('#form-fields').append(html);
            $('.help-popover').popover({
                trigger: 'hover',
                placement: 'right'
            });
            $('#form-description').prepend(json.formDescription);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            ajaxConsoleLog('displayForm', textStatus, jqXHR);
        }
    });
};

// http://stackoverflow.com/questions/905298/jquery-storing-ajax-response-into-global-variable

//webForms.getNewTicketNumber = function (data) {
//    'use strict';
//    var text = data,
//        textSplit = text.split(' '),
//        wordTicketIndex = textSplit.indexOf('Ticket'),
//        ticketIndex = wordTicketIndex + 1;
//        ticket = textSplit[ticketIndex];
//    return ticket;
//};

// not in use yet:
//webForms.getTicket = function (number) {
//    //var url = 'https://rtdev.cac.washington.edu/daw/json/RT/v1/Ticket/Id/' + number;
//    url = 'text.txt';
//    $.ajax({
//        url: url,
//        success: function (data, textStatus, jqXHR) {
//            ajaxConsoleLog(textStatus, jqXHR);
//            console.log(data);
//            $.each(data, function (key, value) {
//                console.log('key = ' + key + ', value = ' + value)
//            });
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            ajaxConsoleLog(textStatus, jqXHR);
//        }    
//    });
//};

// https://rtdev.cac.washington.edu/webforms/js/rt-test.js
webForms.createTicket = function(queue, subject) {
    'use strict';
    //console.log('run createTicket')

    var ajaxUrl = 'https://rtdev.cac.washington.edu/Tools/Offline.html',
        ajaxTestUrl = 'test-files/Offline.html',
        rtDevURL = 'https://rtdev.cac.washington.edu/Ticket/Display.html?id=',
        ticket,
        ticketStringPost = {
            UpdateTickets : 'Upload',
            resultsonly : "on",
            nodecoration : "on",
            string : '===Create-Ticket: ticket1\nQueue: ' + queue + '\nSubject: ' + subject + ', ' + theTimeNow() + '\nContent: ' + message + '\nENDOFCONTENT'
        };

    $.ajax({
        //type: 'POST',
        url: ajaxTestUrl,
        //url : 'Offline.html',
        //contentType: "application/x-www-form-urlencoded",
        data: ticketStringPost,
        //url: 'test.txt',
        success: function(data, textStatus, jqXHR){
            console.log('SUCCESS \n data = ' + data + ', textStatus = ' + textStatus);
            //ticket = Number(webForms.getNewTicketNumber(data));
            $('#ticket-creation-success').fadeIn();
            $('form').hide();

            var differentString = data;
                differentString.split('Ticket ')[1];
            var ticketString = differentString.split('Ticket ')[1];
                ticket = ticketString.split(' ')[0];
        
            $('#ticket-number, #another-request').show();
            $('#ticket-number span').html('<a href="' + rtDevURL + ticket + '">RT ' + ticket + '</a>');

            //$('#ticket-number').html(ticket);
            //ticket = "Fake Number";
            //ticket = Number('random string');
            //if (isNaN(ticket) === true) {
            //    $('#myModal').modal('show')
            //    $('.modal-body p').text('Something went awry'); 
            //    $('#ticket-creation-error').show();    
            //} else {
            //    $('#ticket-number').html('Created RT Ticket <a href="' + rtDevURL + ticket + '">' + ticket + '</a>');
            //}
            //console.log('setQueue is ' + setQueue);
            //console.log('user is ' + webForms.user);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('ERROR textStatus = ' + textStatus + ', errorThrown = ' + errorThrown);
        }
    });
}

webForms.start = function () {
    'use strict';

        var user  = webForms.user,
            host = webForms.host,
            form = getURLParameter('form');

    if (_(host).startsWith('rtdev') === true || _(host).endsWith('local') === true) {
        $('#dev-mode-notice').fadeIn();
    }

    var user  = webForms.user,
        form = getURLParameter('form');
    if (getURLParameter('demo') === 'true' || form === 'demo') {
        $('.demo').fadeIn();
    }

    console.log('user is ' + user)

    // if, at start, some things are unknown, then we can't start 
    if (user === undefined || form === undefined || form === '') {
        $('form, #form-description').hide();
        $('h1').append('Problem');
        $('#form-start-error').fadeIn();
    } else {
        webForms.buildForm(form);    
    }

}

$(function () {
    webForms.start();
});