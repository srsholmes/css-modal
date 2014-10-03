var ƒ = require('hdom');

var Test = require('./modules/test')(ƒ);
var isIE = /Trident\/(\d)/g.test(navigator.userAgent);

ƒ(function() {
   
   Test.init();
     
});