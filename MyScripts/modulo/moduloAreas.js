var app;
(function () {
    app = angular.module("productsModule", ["ui.bootstrap", 'ngRoute']);
    app.config(['$routeProvider', '$locationProvider', 
        function AppConfig($routeProvider, $locationProvider){
        $routeProvider
            .when('/triangulo', {
                templateUrl: 'MyScripts/view/triangulo.html',
                controller:'trianguloController'
            })
            .when('/cuadrado', {
                templateUrl: 'MyScripts/view/cuadrado.html',
                controller: 'cuadradoController'
            })
            .when('/circulo/', {
                templateUrl: 'MyScripts/view/circulo.html',
                controller: 'circuloController'
            });
    }]);
})();
