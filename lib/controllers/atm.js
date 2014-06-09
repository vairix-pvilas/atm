'use strict';

var mongoose = require('mongoose'),
    ATM = mongoose.model('ATM');

exports.query = function(req, res){
    ATM.find().populate('state_id').exec(function(err, atms){
        if(err) throw new Error(err);
        res.json(atms);
    });
};

exports.get = function(req, res){
    ATM.find({ _id: req.body._id }).populate('state_id').exec(function(err, atm){
        if(err) throw new Error(err);
        res.json(atm);
    });
};

exports.save = function(req, res){
    var atm = new ATM({ name: req.body.name,
        address: req.body.address,
        acceptDeposits: req.body.acceptDeposits,
        isMini: req.body.isMini,
        state_id: req.body.state_id ? req.body.state_id._id : null });
    atm.save(function(err, atm){
        if(err) throw new Error(err);
        ATM.findOne(atm).populate('state_id').exec(function (err, atm) {
            if(err) throw new Error(err);
            res.json(atm);
        });
    });
};

exports.edit = function(req, res){
    ATM.findById(req.body._id, function(err, atm){
        if(err) throw new Error(err);
        atm.name = req.body.name;
        atm.address = req.body.address;
        atm.acceptDeposits = req.body.acceptDeposits;
        atm.isMini = req.body.isMini;
        if(req.body.state_id)
            atm.state_id = req.body.state_id._id

        atm.save(function(err, atm){
            if(err) throw new Error(err);
            ATM.findOne(atm).populate('state_id').exec(function (err, atm) {
                if(err) throw new Error(err);
                res.json(atm);
            });
        });
    });
};

exports.delete = function(req, res){
    ATM.findById(req.params.id, function(err, atm){
        if(err) throw new Error(err);
        atm.remove(function(err){
            if(err) throw new Error(err);
            res.json('');
        });
    });
};