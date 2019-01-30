const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`App listening on Port 3000`));

let trainers = [
    {
    'name': 'trainer1',
    'id': 123,
    'pokemons': ['pokemon1', 'pokemon2']
    },
    {
    'name': 'trainer2',
    'id': 1234,
    'pokemons': ['pokemon3', 'pokemon4']
    },
    {
    'name': 'trainer3',
    'id': 12345,
    'pokemons': ['pokemon5', 'pokemon6']
    }
]

app.get('/trainers', function(req, res){
    res.send(trainers)
})

app.get('/trainers/:id', function(req, res){
    for(var i = 0; i < trainers.length; i++){
        if (trainers[i].id == req.params.id){
            res.send(trainers[i])
        }
    }
    //res.send(trainers)
})
