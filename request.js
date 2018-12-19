const express = require('express');
const requestRouter = express.Router();

requestRouter.post('/', (req, res, next) => {
    //In addition to .send(), .json() can be used to explicitly send JSON-formatted responses. 
    //.json() sends any JavaScript object passed into it.
    console.log(req.body);
    res.status(200).json(req.body);
});

module.exports = requestRouter;