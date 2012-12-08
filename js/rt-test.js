
var webForms = {};

webForms.testMe = function (arg) {
    'use strict';
    console.log('TESTING with testMe : ' + arg);
};

webForms.queue = function (queue)  {
        var url = 'queues.json';
        $.ajax({
            url: url,
            success: function(data, textStatus, jqXHR){
                ajaxConsoleLog(textStatus, jqXHR);
                console.log('success and the queue is  ' + queue);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                ajaxConsoleLog(textStatus, jqXHR);
            }
        });
}

webForms.getNewTicketNumber = function (data) {
    text = data;
    var textSplit = text.split(' '),
        wordTicketIndex = textSplit.indexOf('Ticket'),
        ticketIndex = wordTicketIndex + 1;
        ticket = textSplit[5];

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

// https://rtdev.cac.washington.edu/webforms/js/rt-test.js
webForms.createTicket = function(subject, message) {
    'use strict';
    //console.log('message is = ' + message);
    //console.log('encodeURIComponent message is = ' + encodeURIComponent(message));
    var queue = 'SSG:Test';

    message = message.replace('/n', '/n ');

    var newTicket = encodeURIComponent('id: new/ticket\n' +
        'Subject: ' + subject + ', webforms test, ' + theTimeNow() + '\n' + 
        'Queue: ' + queue + '\n' + 
        'Text: ' + message + '\n' + 
        'Requestor: jtate\n' + 
        'Owner: jtate\n' +
        'Priority: 100'),
        rtDevURL = 'https://rtdev.cac.washington.edu/Ticket/Display.html?id=';

    console.log('newTicket url is = ' + newTicket);

    $.ajax({
        type: 'POST',
        url: 'https://rtdev.cac.washington.edu/REST/1.0/ticket/new?content=' + newTicket,
        //url: 'test.txt',
        success: function(data, textStatus, jqXHR){
            console.log('SUCCESS \n data = ' + data + ', textStatus = ' + textStatus);
            ticket = webForms.getNewTicketNumber(data);
            //console.log(webForms.getNewTicketNumber(data));
            $('#ticket-number').html('Created RT Ticket <a href="' + rtDevURL + ticket + '">' + ticket + '</a>');
            //console.log(data);
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
        url: url,
        async: false,
        success: function(data) {
            result = data;
        }
    });
    return result.user;
}

webForms.user = webForms.getUser();

webForms.start = function () {
    'use strict';
    $('button').click(function(subject, content) {
        var subject = $('#subject').val(),
            message = $('#message').val();
        //console.log('in webForms.start subject is  ' + subject + ', message is ' + message )
        webForms.createTicket(subject, message);
    });
}

$(function(){
    'use strict';
    console.log('dom ready')
    webForms.start();
});