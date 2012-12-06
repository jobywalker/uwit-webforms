/* global $ */

// https://github.com/h5bp/html5-boilerplate/blob/master/js/plugins.js
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());



var webForms = {};

// success: data, textStatus, jqXHR
// error: jqXHR, textStatus, errorThrown
window.ajaxConsoleLog = function (textStatus, jqXHR) {
    'use strict';
    var face;
    if (textStatus === 'success') {
        face = ':)';
    } else {
        face = ':(';
    }
    console.log(face + ' ' +  
        textStatus.toUpperCase()  + 
        ' -- jqXHR.statusText = ' +  jqXHR.statusText + 
        ', textStatus = ' + textStatus);
};

webForms.testMe = function (arg) {
    'use strict';
    console.log('TESTING with testMe : ' + arg);
};

function callback () {
    //fake
}

var host = location.hostname;

webForms.getTicket = function (number) {
    var url = 'https://rtdev.cac.washington.edu/daw/json/RT/v1/Ticket/Id/' + number;
    $.ajax({
        url: url,
        success: function (data, textStatus, jqXHR) {
            ajaxConsoleLog(textStatus, jqXHR);
            console.log(data)
            $.each(data, function (key, value) {
                console.log('key = ' + key + ', value = ' + value)
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            ajaxConsoleLog(textStatus, jqXHR);
        }    
    });
};

// https://rtdev.cac.washington.edu/webforms/js/rt-test.js
webForms.createTicket = function(user) {
    'use strict';
    var currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        timeIs = '';
    if (minutes < 10){$('#ticket-number').text(data);
        minutes = "0" + minutes;
    }
    if (hours > 11){
        minutes += " PM";
    } else {
        minutes += " AM";
    }
    timeIs = hours + ':' + minutes;
    //console.log(timeIs);

    var newTicket = encodeURIComponent('id: new/ticket\n' +
        'Subject: webforms test, ' + timeIs + '\n' + 
        'Queue: SSG::Test\n' + 
        'Text: Test\n' + 
        'Requestor: jtate\n' + 
        'Owner: jtate\n' +
        'Priority: 100'),
        rtURL = 'https://rtdev.cac.washington.edu/Ticket/Display.html?id=';

    $.ajax({
        //type: 'POST',
        //url: 'https://rtdev.cac.washington.edu/REST/1.0/ticket/new?content=' + newTicket,
        url: 'test.txt',
        success: function(data, textStatus, jqXHR){
            console.log('SUCCESS \n data = ' + data + ', textStatus = ' + textStatus);
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('ERROR textStatus = ' + textStatus + ', errorThrown = ' + errorThrown);
        }
    });
}



webForms.userPHP = function () {
    var url = 'user.php';
    //webForms.userPHP["user"] = '';
    $.ajax({
        url: url,
        success: function(data, textStatus, jqXHR){
            webForms.userPHP["user"] = data.user;
            console.log('data.user is ' + data.user);
            console.log(' webForms.userPHP["user"]'  + webForms.userPHP["user"])
        },
        error: function(jqXHR, textStatus, errorThrown) {
            ajaxConsoleLog(textStatus, jqXHR);
        }
    });
}

webForms.userParcae = function () {

    var url = 'replace';

    $.ajax({
        url: url,
        success: function(data, textStatus, jqXHR){
            // success: data, textStatus, jqXHR
            // error: jqXHR, textStatus, errorThrown
            ajaxConsoleLog(textStatus, jqXHR);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            ajaxConsoleLog(textStatus, jqXHR);
        }
    });
}

webForms.start = function () {
    'use strict';
    $('button').click(function() {
        //var subject = $('#subject').val(),
        //    content = $('#content').val();
        webForms.createTicket(webForms.testMe('clicking the form'));
    });
    console.log('user from user.php is ' + webForms.userPHP["user"])
}

$(function(){
    'use strict';
    console.log('dom ready')
    webForms.userPHP();
    webForms.start();
});