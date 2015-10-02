angular.module('directoryApp', [])
  .controller('directoryController', function($scope){
    $scope.list = [{name: 'Scott', age: 29},
      {name: 'Leti', age:30},
      {name: 'Laura', age:13},
      {name: 'Paco', age:33}];
  });
