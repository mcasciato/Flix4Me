(function() {

    'use strict';

    angular
        .module('flix4me')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home/home.html',
                    controller: 'HomeController as vm'
                })
                // static
                .state('home.about', {
                    url: 'about',
                    templateUrl: 'about/about.html'
                })
                // auth
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
                // movies
                .state('home.movies', {
                    url: 'movies',
                    templateUrl: 'movies/index.html',
                    controller: 'MoviesController as moviesCtrl'
                })
            $urlRouterProvider.otherwise('/')
        }]);

}());
