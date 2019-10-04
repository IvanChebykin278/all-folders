    
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const config = require('../config/database');
const Tmk = require('../models/tmk');

router.post('/addEntry', function(req, res, next) {
    let newEntry = new Tmk({
        state: req.body.state,
        detalNum: req.body.detalNum,
        height: req.body.height,
        step: req.body.step,
        kone: req.body.kone,
        angel: req.body.angel
    });

    Tmk.addEntry(newEntry, function(err, entry){
        if(err) {
            res.json({success: false, msg: 'Failed'});
        } else {
            res.json(entry); 
        }
    });
});

router.get('/getEntries', (req, res) => {
    Tmk.find({}, null, null, function(err, result) {
        res.json(result);
    });
});

module.exports = router;