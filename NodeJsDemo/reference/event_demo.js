const EventEmitter = require('events');

// Create class
class MyEmmuter extends EventEmitter { }

//Init object
const myEmitter = new myEmitter();

//Event listener
myEmitter.on('event', () => console.log('Event Fired'));

//Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');