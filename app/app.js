'use strict';
var profileApp = angular.module('profileApp', ['ui.router']);

profileApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
   
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('/home', {
            url: '/home',
            templateUrl: '/app/home/home.html',
            controller:'homeController'
        })
}]);