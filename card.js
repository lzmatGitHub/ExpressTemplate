const express = require('express');
const router = express.Router();
module.exports = router;

var cards = [{
    id: 1,
    name: 'Card 1'
}, {
    id: 2,
    name: 'Card 2'
}];

router.use('/:id', (req, res, next) => {
    var id = Number(req.params.id);
    var cardIndex = cards.findIndex(card => card.id === id);
    console.log(cardIndex);
    if(cardIndex === -1){
        var myError= new Error("I don't want to though");
        myError.status = 404;
        next(myError);      
    }
    req.cardIndex = cardIndex;
    next();
});

router.get('/:id', (req, res, next) => {
    console.log(req.cardIndex);
    var card = cards[req.cardIndex];
    res.status(200).send(card);
});