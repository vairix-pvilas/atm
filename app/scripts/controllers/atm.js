'use strict';

angular.module('atmApp')
  .controller('AtmCtrl', function($scope, Atm) {
    /* Auxiliar functions */
    function clearAtm(){
      $scope.selectedAtm = -1;
      $scope.atm = {};
    }

    /* Dom functions */
    $scope.selectedAtm = -1;

    $scope.setSelected = function($index) {
      $scope.selectedAtm =  $index;
      $scope.atm = angular.copy($scope.atms[$index]);
    }

    /* ATM CRUD */
    $scope.atms = Atm.query();

    $scope.addItem = function() {
      $scope.atms.push(Atm.save({},$scope.atm));
      clearAtm();
    };

    $scope.editItem = function() {
      $scope.atms[ $scope.selectedAtm] = $scope.atm;
      Atm.save({id: $scope.atm._id},$scope.atm);
      clearAtm();
    };

    $scope.deleteItem = function(atmId,$index) {
      $scope.atms.splice($index,1);
      Atm.delete({id: atmId});
      if($scope.selectedAtm == $index){
        clearAtm();
      }
    };
});

