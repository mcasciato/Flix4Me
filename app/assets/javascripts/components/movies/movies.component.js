(function () {

    'use strict';

    var movies = {
        transclude: true,
        controller: MovieComponentController,
        templateUrl: 'components/movies/movies.html'
    }

    function MovieComponentController(MovieFactory) {

    }

    angular
        .module('flix4me')
        .component('movies', movies)
}());
