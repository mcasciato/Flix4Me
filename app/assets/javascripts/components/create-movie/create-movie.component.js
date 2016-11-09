(function () {

    'use strict';

    var createMovie = {
        transclude: true,
        controller: CreateMovieComponentController,
        templateUrl: 'components/create-movie/create-movie.html'
    }
    function CreateMovieComponentController() {

    }

    angular
        .module('flix4me')
        .component('createMovie', createMovie)
}());
