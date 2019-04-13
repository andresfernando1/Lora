'use strict'

/*
|--------------------------------------------------------------------------
| Http server
|--------------------------------------------------------------------------
|
| This file bootstraps Adonisjs to start the HTTP server. You are free to
| customize the process of booting the http server.
|
| """ Loading ace commands """
|     At times you may want to load ace commands when starting the HTTP server.
|     Same can be done by chaining `loadCommands()` method after
|
| """ Preloading files """
|     Also you can preload files by calling `preLoad('path/to/file')` method.
|     Make sure to pass a relative path from the project root.
*/

const { Ignitor } = require('@adonisjs/ignitor')

new Ignitor(require('@adonisjs/fold'))
    .appRoot(__dirname)
    .fireHttpServer()
    .catch(console.error)

const Datum = use('App/Controllers/Http/DatumController');
const SerialPort = require('serialport');

const ReadLine = SerialPort.parsers.Readline;

const port = new SerialPort("COM10", {
    baudRate: 9600
});
const parser = port.pipe(new ReadLine({ delimiter: '\r\n' }));

parser.on('open', function() {
    console.log('connection is opened');
});

parser.on('data', function(data) {
    Datum.store({ message: data });
});


parser.on('error', (err) => console.log(err));
port.on('error', (err) => console.log(err));