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

window.theTimeNow = function () {
    'use strict';
    var currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        timeIs = '';
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (hours === 0){
        hours = 12;
    }
    if (hours > 12) {
        hours -= 12;
        minutes += " PM";
    } else {
        minutes += " AM";
    }
    timeIs = hours + ':' + minutes; 
    return timeIs;
};