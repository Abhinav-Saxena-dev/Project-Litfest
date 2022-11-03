const express = require('express')

const jrouter = express.Router();

const Jam = require('./../models/jam')

jrouter.post('just-a-minute', (req, res) => {
    Jam.create(req.body)
        .then(people => res.json(`The person ${JSON.stringify(req.body)} is created and ${people}`))
        .catch(err => res.status(404).json(`The person could not be created with error ${err}`))
})

module.exports = jrouter;
