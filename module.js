"use strict";
exports.__esModule = true;
//declare a module of message with interface and methods
var message;
(function (message_1) {
    // export 2 function of message 1 and 2
    function displayMessage(message) {
        console.log(message);
    }
    message_1.displayMessage = displayMessage;
    function displayMessage2(message) {
        console.log(message);
    }
    message_1.displayMessage2 = displayMessage2;
})(message = exports.message || (exports.message = {}));
