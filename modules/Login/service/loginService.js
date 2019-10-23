angular.module("app").service("loginService", function ($http, config) {
  return {
      getAll: function (id) {
          return $http.get(config.baseUrl + "api/login/"+id);
      }
  };
});