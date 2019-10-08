angular.module("app").controller("usuarioController", function ($scope, $location, usuarioService ) {
      
    $scope.getAllusuarios = function (id) {
          usuarioService.getAll().then(function (response) {
          // $scope.AtmosferaLugar = angular.copy(response.data);
          // console.log($scope.AtmosferaLugar);
      });
  }
});