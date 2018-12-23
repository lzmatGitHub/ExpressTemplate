const express = require('express');
const router = express.Router();
const nestedRouter = express.Router({
    mergeParams: true
});
module.exports = router;
router.use('/:id/copy', nestedRouter);

var cards = [{
    id: 1,
    name: 'Card 1'
}, {
    id: 2,
    name: 'Card 2'
}];

/*
router.use('/:id', (req, res, next) => {
    var id = Number(req.params.id);
    var cardIndex = cards.findIndex(card => card.id === id);
    console.log(cardIndex);
    if(cardIndex === -1){
        var myError= new Error("There is no this card");
        myError.status = 404;
        next(myError);      
    }
    req.cardIndex = cardIndex;
    next();
});
*/

router.param('id', (req, res, next, id) => {
    var cardIndex = cards.findIndex(card => card.id === Number(id));
    console.log(cardIndex);
    if (cardIndex === -1) {
        var myError = new Error("There is no this card");
        myError.status = 404;
        return next(myError);
    }
    req.cardIndex = cardIndex;
    next();
});

router.get('/:id', (req, res, next) => {
    console.log(req.cardIndex);
    var card = cards[req.cardIndex];
    res.status(200).send(card);
});

nestedRouter.get('/', (req, res, next) => {
    var card = cards[req.cardIndex];
    res.status(200).send([card, card]);
});