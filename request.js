const express = require('express');
const router = express.Router();

module.exports = router;

const firstTodo = (req, res, next) => {
    console.log("This is from a pre-function:");
    console.log(req.body);
    next();
};
router.use('/', firstTodo, (req, res, next) => {
    //In addition to .send(), .json() can be used to explicitly send JSON-formatted responses. 
    //.json() sends any JavaScript object passed into it.
    res.status(200).json(req.body);
});

