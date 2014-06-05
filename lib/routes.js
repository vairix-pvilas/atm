'use strict';

var api = require('./controllers/api'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function (app) {

    // All the ATM CRUD routes
    app.namespace('/api', function () {
        app.get('/atm', api.query);
        app.get('/atm/:id', api.get);
        app.post('/atm', api.save);
        app.post('/atm/:id', api.edit);
        app.delete('/atm/:id', api.delete);
    });

    // All undefined api routes should return a 404
    app.route('/api/*')
        .get(function (req, res) {
            res.send(404);
        });

    // All other routes to use Angular routing in app/scripts/app.js
    app.route('/partials/*')
        .get(index.partials);
    app.route('/*')
        .get(index.index);
};