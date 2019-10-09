angular.module("app").controller("usuarioController", function ($scope, $location, usuarioService ) {      
  
    $scope.getAllusuarios = function () {
      var busca = $scope.busca;
          usuarioService.getAll(busca).then(function (response) {
            
          if(response.data == "")     
            alert("teste") ;
          else
            $scope.nome = response.data.nome;        
                    
      });
  }
});