(function() {
    'use strict';

    angular
        .module('flix4me')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home/home.html',
                    controller: 'HomeController as homeCtrl'
                })
        })
}())
