var webForms = {};

webForms.testMe = function (arg) {
    'use strict';
    console.log('TESTING with testMe : ' + arg);
};

webForms.getQueue = function (id) { 
    'use strict';
    console.log('running getQueue')
    var url = 'queues.json',
        result = null;
    $.ajax({
        url: url,
        async: false,
        success: function(data, textStatus, jqXHR) {
            result = data[id];
            //$('#uw-netid').text(result.user);
            // error: jqXHR, textStatus, errorThrown
            ajaxConsoleLog('getQueue', textStatus, jqXHR);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            ajaxConsoleLog('getQueue', textStatus, jqXHR);
        }
    });
    console.log('result.queue = ' + result.queue);
    return result.queue;
};

webForms.getNewTicketNumber = function (data) {
    'use strict';
    var text = data,
        textSplit = text.split(' '),
        wordTicketIndex = textSplit.indexOf('Ticket'),
        ticketIndex = wordTicketIndex + 1;
        ticket = textSplit[ticketIndex];
    return ticket;
};

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


webForms.parcaeUser = function (user) {
    user = webForms.getUser();
    // https://shades.cac.washington.edu/parcae/api/user/director/uwnetid/joby/
    https://shades.cac.washington.edu/parcae/api/user/director/app/RT/uwnetid/joby/
    'use strict';
    var url = 'https://shades.cac.washington.edu/parcae/api/user/director/app/RT/uwnetid/jtate/';
    $.ajax({
        url: url,
        success: function (data, textStatus, jqXHR) {
            ajaxConsoleLog('parcaeUser', textStatus, jqXHR);
            console.log(data);
            //$.each(data, function (key, value) {
            //    console.log('key = ' + key + ', value = ' + value)
            //});
        },
        error: function (jqXHR, textStatus, errorThrown) {
            ajaxConsoleLog('parcaeUser', textStatus, jqXHR);
        }    
    });
};

// https://rtdev.cac.washington.edu/webforms/js/rt-test.js
webForms.createTicket = function(subject, message) {
    'use strict';

    var queue = 'SSG::Test',
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
        url: 'https://rtdev.cac.washington.edu/Tools/Offline.html',
        //url : 'Offline.html',
        //contentType: "application/x-www-form-urlencoded",
        data: ticketStringPost,
        //url: 'test.txt',
        success: function(data, textStatus, jqXHR){
            console.log('SUCCESS \n data = ' + data + ', textStatus = ' + textStatus);
            ticket = Number(webForms.getNewTicketNumber(data));
            //ticket = Number('random string');
            if (isNaN(ticket) === true) {
                $('#ticket-number').html('Something went awry');     
            } else {
                $('#ticket-number').html('Created RT Ticket <a href="' + rtDevURL + ticket + '">' + ticket + '</a>');
            }
            //console.log('setQueue is ' + setQueue);
            //console.log('user is ' + webForms.user);
            //webForms.parcaeUser();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('ERROR textStatus = ' + textStatus + ', errorThrown = ' + errorThrown);
        }
    });
}

// http://stackoverflow.com/questions/905298/jquery-storing-ajax-response-into-global-variable
webForms.getUser = function () { 
    var url = 'php/user-parcae.php',
        testUrl = 'user.json',
        result = null;
    $.ajax({
        url: url,
        async: false,
        success: function(data) {
            result = data;
            console.log('getUser = ' + result.User.UWNetID);
            //$('#whoami').text('UWNetID : ' + result.User[0].UWNetID);
        }
    });
    //return result.user;
};

webForms.user = webForms.getUser();

webForms.start = function (config) {
    'use strict';
    webForms.displayForm();
    var uwNetID = webForms.getUser(),
        queue = webForms.getQueue('ssgTest'),
        subject = $('#subject').val(),
        message = $('#message').val();
    $('#uw-netid').text(uwNetID);
    $('button').click(function() {
        webForms.createTicket(subject, message, queue);
    });
};

webForms.displayForm = function () {
    var form = getURLParameter('form'),
        url;
    if (form === 'test') {
        url = 'test-form-config.json';
    }

    console.log('running displayForm');
    $.ajax({
        url: url,
        dataType: 'json',
        contentType: 'application/json',
        success: function (data, textStatus, jqXHR) {
            ajaxConsoleLog('displayForm', textStatus, jqXHR);
            webForms.buildForm(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            ajaxConsoleLog('displayForm', textStatus, jqXHR);
        }
    });
};

webForms.buildForm = function (json) {
    var html = '';
    $('h1').append(json.formName);
    var input = ''; 
    $.each(json.fields, function(k, v){
        //console.log('k = ' + k + ', v = ' + v);
        if (v.inputType === 'textarea') {
            input = '<textarea rows="5"></textarea>';
        } else {
            input = '<input type="' + v.inputType +'" id="something" placeholder="' + v.placeholder + '">';
        }
        html += '<div class="control-group">' +
            '<label class="control-label" for="input' + v.id + '">' + v.name + '</label>' +
            '<div class="controls">' + 
            input + '</div>' +
            '</div>';
    });
    $('.form-horizontal').prepend(html);
};

$(function(){
    'use strict';
    //console.log('dom ready');
    //webForms.parcaeUser();
    webForms.start();
});