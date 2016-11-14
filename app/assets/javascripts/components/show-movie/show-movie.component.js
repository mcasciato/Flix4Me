(function () {

    'use strict';

    var showMovie = {
        transclude: true,
        controller: ShowMovieComponentController
        templateUrl: 'components/show-movie/show-movie.html'
    }

    function ShowMovieComponentController(MovieFactory, Auth, $state) {
        var ctrl = this;

        ctrl.getMovie = getMovie;

    }

    angular
        .module('flix4me')
        .component('showMovie', showMovie)
}());
