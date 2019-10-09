angular.module("app").service("usuarioService", function ($http, config) {
  return {
      getAll: function (id) {
          return $http.get(config.baseUrl + "api/usuario/"+id);
      }
  };
});