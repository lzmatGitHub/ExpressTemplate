const express = require('express');
const sqlite3 = require('sqlite3');
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

const db = new sqlite3.Database('./db.sqlite');

/*
for (let i = 0; i < cards.length; i++) {
    db.run(
        "INSERT INTO cards (id, name) VALUES (NULL, $name)",
        {$name: cards[i].name},
        function(err){
            if(err){
                console.log(err);
                return;
            }
            console.log(this.lastID); 
        });
}
db.run(
    "CREATE TABLE cards (id INTEGER PRIMARY KEY, name TEXT NOT NULL)",
    err => {
        console.log(err);
        return;
    }
);
db.run(
    "DROP TABLE IF EXISTS cards",
    err => {
        console.log(err);
    }
);
*/

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