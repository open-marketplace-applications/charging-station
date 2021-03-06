const paymentModule = require('iota-payment')
const app = require('express')()

const { runPython } = require('./ScriptHandler.js')

app.get("/", (req, res) => {
    res.send('hello world from chargin station!');
});

let options = {
    api: true,
    dashboard: true,
    websockets: true
    // ...
}

let server = paymentModule.createServer(app, options)

// Start server with iota-payment dashboard on '/iotapay' and api on '/iotapay/api'
server.listen(5000, () => {
    console.log(`Server started on http://localhost:5000 `)
    console.info(`Please visit http://localhost:5000/iotapay in your browser`)
})

//Create an event handler which is called, when a payment was created
var onPaymentCreated = function (payment) {
    console.log('payment created!', payment);
}

//Create an event handler which is called, when a payment was created
var onPaymentIncoming = function (payment) {
    console.log('payment incoming!', payment);
}

//Create an event handler which is called, when a payment was successfull
var onPaymentSuccess = function (payment) {
    console.log('payment success!', payment);
    runPython('./script.py').then((result) => {
        console.log('runPython success!', result);
    }, (error) => {
        console.log('runPython error!', error);
    });

}

//Assign the event handler to the events:
paymentModule.onEvent('paymentCreated', onPaymentCreated);
paymentModule.onEvent('paymentIncoming', onPaymentIncoming);
paymentModule.onEvent('paymentSuccess', onPaymentSuccess);