//npm init
//npm install express --save

// Import the express library here
const express = require('express');

// Instantiate the app here
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
// to get res.body in json format of POST request
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method + ' Request Received !');
    next();
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/js/script.js', function (req, res) {
    res.sendFile(__dirname + '/js/script.js');
});

//read handlers from another file
const requestRouter = require('./request.js');
app.use('/route', requestRouter);

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});