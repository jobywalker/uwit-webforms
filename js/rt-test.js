
var webForms = {};

webForms.testMe = function (arg) {
    'use strict';
    console.log('TESTING with testMe : ' + arg);
};

webForms.getQueue = function (id) { 
    'use strict';
    var url = 'queues.json',
        testUrl = 'queues.json',
        result = null;
    $.ajax({
        url: testUrl,
        async: false,
        success: function(data) {
            result = data;

            //$('#uw-netid').text(result.user);
        }
    });
    return result[id].queue;
;
};

webForms.getNewTicketNumber = function (data) {
    text = data;
    var textSplit = text.split(' '),
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


webForms.parcaeUser = function () {
    // https://shades.cac.washington.edu/parcae/api/user/director/uwnetid/joby/
    var url = 'https://shades.cac.washington.edu/parcae/api/user/director/uwnetid/'+ webForms.user + '/';
    $.ajax({
        url: url,
        success: function (data, textStatus, jqXHR) {
            ajaxConsoleLog(textStatus, jqXHR);
            console.log(data);
            //$.each(data, function (key, value) {
            //    console.log('key = ' + key + ', value = ' + value)
            //});
        },
        error: function (jqXHR, textStatus, errorThrown) {
            ajaxConsoleLog(textStatus, jqXHR);
        }    
    });
}

// https://rtdev.cac.washington.edu/webforms/js/rt-test.js
webForms.createTicket = function(subject, message) {
    'use strict';
    var setQueue = webForms.getQueue('ssgTest');

    var queue = 'SSG::Test',
        rtDevURL = 'https://rtdev.cac.washington.edu/Ticket/Display.html?id=',
        ticket,
        ticketStringPost = {
            UpdateTickets : 'Upload',
            resultsonly : "on",
            nodecoration : "on",
            string : '===Create-Ticket: ticket1\nQueue: ' + queue + '\nSubject: ' + subject + '\nContent: ' + message + '\nENDOFCONTENT'
        };

    $.ajax({
        //type: 'POST',
        //url: 'https://rtdev.cac.washington.edu/Tools/Offline.html',
        url : 'Offline.html',
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
            console.log('setQueue is ' + setQueue);
            console.log('user is ' + webForms.user);
            webForms.parcaeUser();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('ERROR textStatus = ' + textStatus + ', errorThrown = ' + errorThrown);
        }
    });
}

// http://stackoverflow.com/questions/905298/jquery-storing-ajax-response-into-global-variable
webForms.getUser = function () { 
    var url = 'user.php',
        testUrl = 'user.json',
        result = null;
    $.ajax({
        url: testUrl,
        async: false,
        success: function(data) {
            result = data;
            //$('#uw-netid').text(result.user);
        }
    });
    return result.user;
}

//webForms.user = webForms.getUser();

webForms.start = function () {
    'use strict';
    var uwNetID = webForms.getUser();
    $('#uw-netid').text(uwNetID);
    $('button').click(function(subject, content) {
        var subject = $('#subject').val(),
            message = $('#message').val();
        //console.log('in webForms.start subject is  ' + subject + ', message is ' + message )
        webForms.createTicket(subject, message);
    });
}

$(function(){
    'use strict';
    console.log('dom ready');
    webForms.start();
});