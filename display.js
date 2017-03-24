"use strict";
exports.__esModule = true;
//import the module of other file
var module_1 = require("./module");
//get the interface declation 
var messageObj;
// call the method 1 & 2 with the type of interface as parameter.
module_1.message.displayMessage(messageObj = { type: "I am displaying first method console" });
module_1.message.displayMessage2(messageObj = { type: "I am displaying second method console" });
