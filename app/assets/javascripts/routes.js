(function() {

    'use strict';

    angular
        .module('flix4me')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home/home.html',
                    controller: 'HomeController as vm'
                })
                .state('home.profile', {
                    url: 'profile',
                    templateUrl: 'user/profile.html',
                    controller: 'ProfileController as vm'
                })
                .state('home.about', {
                    url: 'about',
                    templateUrl: 'about/about.html'
                })
                .state('home.login', {
                    url:'login',
                    templateUrl: 'auth/login.html',
                    controller: 'AuthController as authCtrl',
                    onEnter: ['$state', 'Auth', function($state, Auth) {
                        Auth.currentUser().then(function(){
                            $state.go('home.profile');
                        });
                    }]
                })
                .state('home.register', {
                    url:'register',
                    templateUrl: 'auth/register.html',
                    controller: 'AuthController as authCtrl',
                    onEnter: ['$state', 'Auth', function($state, Auth) {
                        Auth.currentUser().then(function(){
                            $state.go('home.profile');
                        });
                    }]
                })
            $urlRouterProvider.otherwise('/')
        })



}());
