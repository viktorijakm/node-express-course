const path = require('path');
const EventEmitter = require('events');

const emitter = new EventEmitter();

setInterval(() => {
    emitter.emit('timer', "Hello World - it's time to dance");
}, 3000);

// event handler
emitter.on('timer',(msg) =>{
    console.log("We received timer event:", msg);
});


// async event
const waitForEvent = () => {
return new Promise((resolve) =>{
emitter.on('happens', (msg) => resolve(msg));
});
};

const doWait = async () => {
    const msg = await waitForEvent();
    console.log("Here is your event:", msg);
};

doWait();
emitter.emit('happens', "Time to dance!");


// node customEmitter.js