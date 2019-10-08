angular.module("app").service("usuarioService", function ($http, config) {

  return {
      getAll: function () {
          return $http.get(config.baseUrl + "usuario");
      }
  };
});