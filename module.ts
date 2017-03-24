//declare a module of message with interface and methods
export module message {
    //export a interface
    export interface messageType {
        type: string;
    }
    // export 2 function of message 1 and 2
    export function displayMessage (message) {
        console.log(message);
    }
    export function displayMessage2 (message) {
        console.log(message);
    }

}