'use strict';

angular.module('atmApp')
  .controller('AtmCtrl', function($scope, Atm) {
    $scope.atms = Atm.query();

    $scope.addItem = function(atm) {
        $scope.atms.push(Atm.save({},atm))
    };

    $scope.editItem = function(atm) {
      Atm.save({id: atm._id},atm)
    };

    $scope.deleteItem = function(atmId,$index) {
      $scope.atms.splice($index,1)
      Atm.delete({id: atmId})
    };
});

