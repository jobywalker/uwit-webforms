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

(function() { 
    
    'use strict';

    var ajaxConsoleLog = function (textStatus, jqXHR) {
        var face;
        if (textStatus === 'success') {
            face = ':)';
        } else {
            face = ':(';
        }
        console.log(face + ' ' +  textStatus.toUpperCase()  + ' -- jqXHR.statusText = ' + jqXHR.statusText + ', textStatus = ' + textStatus);
    };

    var tsmForm = {};

    tsmForm.displayForm = function () {
        console.log('running getFormJson');
        $.ajax({
            url: 'tsm-form-fields.json',
            dataType: 'json',
            contentType: 'application/json',
            success: function (data, textStatus, jqXHR) {
                ajaxConsoleLog(textStatus, jqXHR);
                tsmForm.buildForm(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                ajaxConsoleLog(textStatus, jqXHR);
            }
        });
    };

    tsmForm.buildForm = function (json) {
        var html = '';
        $.each(json, function(k, v){
            console.log('k = ' + k + ', v = ' + v);
            html += '<div class="control-group">' +
                '<label class="control-label" for="input' + v.id + '">' + v.name + '</label>' +
                '<div class="controls">' + 
                '<input type="' + v.inputType +'" id="inputEmail" placeholder="' + v.placeholder + '">' + 
                '</div>' +
                '</div>';
        });
        $('.form-horizontal').append(html);
    };

    $(function () { 
        tsmForm.displayForm();
    });

}());