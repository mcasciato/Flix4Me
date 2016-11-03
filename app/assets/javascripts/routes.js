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
                .state('home.signup', {
                    url: 'signup',
                    templateUrl: 'auth/signup.html',
                    controller: 'AuthController as authCrl'
                    onEnter: ['$state', 'Auth', function($state, Auth) {
                        Auth.currentUser().then(function(){
                            $state.go('home.mylist');
                        });
                    }]
                })
        })      .state()
}())
