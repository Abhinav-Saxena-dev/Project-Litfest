const express = require('express')

const derouter = express.Router();

const Debate = require('./../models/debate')

derouter.post('debate', (req, res) => {
    Debate.create(req.body)
        .then(people => res.json(`The person ${JSON.stringify(req.body)} is created and ${people}`))
        .catch(err => res.status(404).json(`The person could not be created with error ${err}`))
})

module.exports = derouter;
