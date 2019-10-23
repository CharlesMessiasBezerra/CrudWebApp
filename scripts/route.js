angular.module("app").config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "modules/Usuario/view/usuario.view.html",
            controller: "usuarioController"
        })
        .when("/login", {
            templateUrl: "modules/Login/view/login.view.html",
            controller: "loginController"
        })
                
        .otherwise({
            templateUrl: '',
            redrectTo: '/'
        });
});