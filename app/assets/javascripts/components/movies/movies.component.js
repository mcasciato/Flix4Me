(function () {

    'use strict';

    var movies = {
        transclude: true,
        controller: MovieComponentController,
        templateUrl: 'components/movies/movies.html'
    }

    function MovieComponentController(MovieFactory, $filter, $state) {
        var ctrl = this

        ctrl.refilter = refilter

        activate()

        function activate() {
            getMovies()
        }

        function getMovies() {
            return MovieFactory.getMovies()
                               .then(setMovies)
                               .then(setFilteredList)
        }

        function setMovies(data) {
            ctrl.movies = data
        }

        function setFilteredList() {

        }

        function refilter() {

        }
    }

    angular
        .module('flix4me')
        .component('movies', movies)
}());
