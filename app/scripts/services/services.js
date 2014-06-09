app.factory('Atm', function($resource) {
    return $resource('api/atm/:id',{id: '@id'});
});

app.factory('State', function($resource) {
    return $resource('api/state/:id',{id: '@id'});
});
