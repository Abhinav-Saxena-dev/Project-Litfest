const express = require('express')

const creative = express.Router();

const Creative = require('./../models/writing')

creative.post('/creative-writing', (req, res) => {
    Creative.create(req.body)
        .then(people => res.json(`The person ${JSON.stringify(req.body)} is created and ${people}`))
        .catch(err => res.status(404).json(`The person could not be created with error ${err}`))
})

module.exports = creative;
