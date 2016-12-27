(function() {

    'use strict';

    function PopularMoviesService($http) {
        this.getPopularMovies = function () {
            return $http.get('https://api.themoviedb.org/3/movie/popular?api_key=47fdd44646c7f80f91ffd886d8b52d00&language=en-US&page=1')
        };
    }

    angular
        .module('flix4me')
        .service('PopularMoviesService', PopularMoviesService);
}()):
