const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');


//Connection to database
mongoose.connect(config.database, {useNewUrlParser: true});

//On connection
mongoose.connection.on('connected', function() {
    console.log('Connected to database ' + config.database);
});

//On error
mongoose.connection.on('error', function(err) {
    console.log('Database error: ' + err);
});

const app = express();

const service = require('./routes/service');


// Port number
const port = 3100;

//CORS Middleware
app.use(cors());

//Set Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/service', service);

//Index route 
app.get('/', function(req, res) {
    res.send('Invalid Endpoint');
});


//Start server
app.listen(port, function() {
    console.log('Server startend on port ' + port);
})

