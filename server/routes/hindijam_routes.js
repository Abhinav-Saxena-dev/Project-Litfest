const express = require('express')

const hjrouter = express.Router();

const HindiJam = require('./../models/jam-hindi')

hjrouter.post('/hindi-jam', (req, res) => {
    HindiJam.create(req.body)
        .then(people => res.json(`The person ${JSON.stringify(req.body)} is created and ${people}`))
        .catch(err => res.status(404).json(`The person could not be created with error ${err}`))
})

module.exports = hjrouter;
