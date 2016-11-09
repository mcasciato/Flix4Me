(function () {

    'use strict';

    var createMovie = {
        transclude: true,
        controller: CreateMovieComponentController,
        templateUrl: 'components/create-movie/create-movie.html'
    }
    function CreateMovieComponentController(MovieFactory, $state, Auth) {
        var ctrl = this;

        ctrl.createMovie = createMovie
        ctrl.signedIn = Auth.isAuthenticated();

        function createMovie() {
            if (ctrl.signedIn) {
                return MovieFactory.createMovie(ctrl.movie)
                                   .then(function() {
                                       $state.go('home.profile')
                                   })
            } else {
                alert("You must be signed in to create a movie");
                $state.go('home.login')
            }

        }
    }

    angular
        .module('flix4me')
        .component('createMovie', createMovie)
}());
