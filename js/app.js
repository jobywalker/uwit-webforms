// Filename: app.js
define([
  'jquery',
], function($, Bootstrap){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});