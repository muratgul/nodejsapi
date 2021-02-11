const { request } = require("express");

const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-ruencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send("Hello World");
});
// import notes rotes
const notesRoutes = require('./src/routes/notes.route');

// create notes routes
app.use('/api/v1/note', notesRoutes);

// listen to the port
app.listen(port, ()=>{
    console.log('Express Server is running at port ' + port);
});
