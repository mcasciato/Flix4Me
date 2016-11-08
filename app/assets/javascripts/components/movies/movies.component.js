(function () {

    'use strict';

    var movies = {
        transclude: true,
        controller: MovieComponentController,
        templateUrl: 'components/movies/movies.html'
    }

    function MovieComponentController(MovieFactory) {
        var ctrl = this

        activate()

        function activate() {
            getMovies()
        }

        function getMovies() {
            return MovieFactory.getMovies()
                               .then(setMovies)
        }

        function setMovies(data) {
            ctrl.movies = data
        }
    }

    angular
        .module('flix4me')
        .component('movies', movies)
}());
