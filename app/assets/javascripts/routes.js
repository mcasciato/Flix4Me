(function() {
    'use strict';

    angular
        .module('flix4me')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home/home.html',
                    controller: 'HomeController as homeCtrl'
                })
                .state('home.register', {
                    url: 'register',
                    templateUrl: 'auth/register.html',
                    controller: 'AuthController as authCtrl',
                    onEnter: ['$state', 'Auth', function($state, Auth) {
                        Auth.currentUser().then(function(){
                            $state.go('home.mylist');
                        });
                    }]
                })
                .state('home.login', {
                    url: 'login',
                    templateUrl: 'auth/login.html',
                    controller: 'AuthController as authCtrl',
                    onEnter: ['$state', 'Auth', function($state, Auth) {
                        Auth.currentUser().then(function(){
                            $state.go('home.mylist');
                        });
                    }]
                })
                .state('home.movies', {
                    url: 'movies',
                    templateUrl: 'movies/movies.html',
                    controller: 'MoviesController as moviesCtrl'
                })
                .state('home.tv_shows', {
                    url: 'tv_shows',
                    templateUrl: 'tv_shows/tv_shows.html',
                    controller: 'TvShowsController as tvShowsCtrl'
                })
                .state('home.about', {
                    url: 'about',
                    templateUrl: 'about/about.html',
                })

                $urlRouterProvider.otherwise('/')

        }]);
}())
