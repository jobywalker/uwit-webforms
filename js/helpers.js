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

// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values/901144#901144
// https://gist.github.com/4266063
window.getURLParameter = function (name) {
    'use strict';
    name = name.replace(/[\[]/, "\\\\[").replace(/[\]]/, "\\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)",
        regex = new RegExp(regexS),
        results = regex.exec(window.location.search);
    if (results === null) {
        return "";
    } else {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
};

// success: data, textStatus, jqXHR
// error: jqXHR, textStatus, errorThrown
window.ajaxConsoleLog = function (functionName, textStatus, jqXHR) {
    'use strict';
    var face;
    if (textStatus === 'success') {
        face = ':)';
    } else {
        face = ':(';
    }
    console.log(face + ' ' +  
        textStatus.toUpperCase()  + 
        ' -- for ' + functionName + ' : jqXHR.statusText = ' + jqXHR.statusText + 
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

window.gitHubNotice = function () {
    console.log(location.host)
    if (location.host === 'jodytate.github.com') {
        $('#github-notice').fadeIn();
    }
};