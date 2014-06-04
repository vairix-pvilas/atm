app.factory('Atm', function($resource) {
    return $resource('/api/atm/:id',{id: '@id'});
});
