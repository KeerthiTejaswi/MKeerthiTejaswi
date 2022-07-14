//  EventEmitter Object
// require() function is used to include modules
var events = require('events');
var eventEmitter = new events.EventEmitter();
// Creating an event handler
var aEventHandler = function() {
    console.log('iam happy');
}
// Assigning the event handler to an event
eventEmitter.on('happy', aEventHandler);
// fire the 'happy' event
eventEmitter.emit('happy'); // we will be getting the output as iam happy
