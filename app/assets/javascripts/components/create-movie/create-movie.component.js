(function () {

    'use strict';

    var createMovie = {
        transclude: true,
        controller: CreateMovieComponentController,
        templateUrl: 'components/create-movie/create-movie.html'
    }
    function CreateMovieComponentController(MovieFactory, $state) {
        var ctrl = this;

        ctrl.createMovie = createMovie

        function createMovie() {
            return MovieFactory.createMovie(ctrl.movie)
                               .then(function() {
                                   $state.go('home.profile')
                               })
        }
    }

    angular
        .module('flix4me')
        .component('createMovie', createMovie)
}());
