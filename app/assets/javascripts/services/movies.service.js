(function() {

    'use strict';

    function MoviesService($http) {
        getTopMovies = getTopMovies;

        function getTopMovies($http) {
            return $http.get('https://api.themoviedb.org/3/movie/popular?api_key=47fdd44646c7f80f91ffd886d8b52d00&language=en-US')
        }
    }

    angular
        .module('flix4me')
        .service('MoviesService', MoviesService);
}());
