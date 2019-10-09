angular.module("app").config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "modules/Usuario/view/usuario.view.html",
            controller: "usuarioController"
        })
                
        .otherwise({
            templateUrl: '',
            redrectTo: '/'
        });
});