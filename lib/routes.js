'use strict';

var atm = require('./controllers/atm'),
    state = require('./controllers/state'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function (app) {

    // All the API routes
    app.namespace('/api', function () {
        //ATM routes
        app.get('/atm', atm.query);
        app.get('/atm/:id', atm.get);
        app.post('/atm', atm.save);
        app.post('/atm/:id', atm.edit);
        app.delete('/atm/:id', atm.delete);
        //State routes
        app.get('/state', state.query);
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