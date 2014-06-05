/**
 * Created by vairix on 6/5/14.
 */

'use strict';

var mongoose = require('mongoose'),
    State = mongoose.model('State');

/**
 * Populate database with states data
 */

//Check if there is any state loaded

State.count(function (err, count) {
    if (count == 0) {
        State.create({
                name: 'Montevideo'
            },
            {
                name: 'Canelones'
            },
            {
                name: 'Maldonado'
            },
            {
                name: 'Rocha'
            });
    }
});