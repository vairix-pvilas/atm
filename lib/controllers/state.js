/**
 * Created by vairix on 6/5/14.
 */

'use strict';

var mongoose = require('mongoose'),
    State = mongoose.model('State');

exports.query = function(req, res){
    State.find(function(err, states){
        if(err) throw new Error(err);
        res.json(states);
    });
};