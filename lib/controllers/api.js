'use strict';

var mongoose = require('mongoose'),
    ATM = mongoose.model('ATM');

exports.query = function(req, res){
    ATM.find(function(err, atms){
        if(err) throw new Error(err);
        res.json(atms);
    });
};

exports.get = function(req, res){
    ATM.findById(req.body._id, function(err, atm){
        if(err) throw new Error(err);
        res.json(atm);
    });
};

exports.save = function(req, res){
    var atm = new ATM({ name: req.body.name,
        address: req.body.address,
        acceptDeposits: req.body.acceptDeposits,
        isMini: req.body.isMini });
    atm.save(function(err, atm){
        if(err) throw new Error(err);
        res.json(atm);
    });
};

exports.edit = function(req, res){
    ATM.findById(req.body._id, function(err, atm){
        if(err) throw new Error(err);
        atm.name = req.body.name;
        atm.address = req.body.address;
        atm.acceptDeposits = req.body.acceptDeposits;
        atm.isMini = req.body.isMini;

        atm.save(function(err, atm){
            if(err) throw new Error(err);
            res.json(atm);
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