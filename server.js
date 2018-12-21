//npm init
//npm install express --save

// Import the express library here
const express = require('express');
//for logging
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Instantiate the app here
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
// to get res.body in json format of POST request
app.use(bodyParser.json());

//for logging
app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/js/script.js', function (req, res) {
    res.sendFile(__dirname + '/js/script.js');
});

//read handlers from another file
const requestRouter = require('./request.js');
app.use('/route', requestRouter);
const cardRouter = require('./card.js');
app.use('/findCard', cardRouter);


app.use((err, req, res, next) => {
    const status = err.status || 500;
    console.log(err.message);
    res.status(status).send({
        value: err.message
    });
});

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});