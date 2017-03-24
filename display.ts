//import the module of other file
import {message} from './module';
//get the interface declation 
let messageObj:message.messageType 
// call the method 1 & 2 with the type of interface as parameter.
message.displayMessage(messageObj = {type:"I am displaying first method console"}) ;
message.displayMessage2(messageObj = {type:"I am displaying second method console"}) ;