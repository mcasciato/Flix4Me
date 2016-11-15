(function() {
    'use strict';

    function MoviesController(MovieFactory, $filter, $state, Auth) {
        var vm = this;

        // callable methods
        vm.getMovies = getMovies;
        vm.createMovie = createMovie;
        vm.signedIn = Auth.isAuthenticated();

        // instantiate
        activate();

        function activate() {
            getMovies();
        }

        function getMovies() {
            return MovieFactory.getMovies()
                               .then(setMovies);
        }

        function setMovies(data) {
            return vm.movies = data;
        }

        function createMovie() {
            if (vm.signedIn) {
                return MovieFactory.createMovie(vm.movie)
                                   .then(showMovie)
            } else {
                alert("You must be logged in to add a movie.")
                $state.go('home.login')
            }
        }

        function showMovie(data) {
            $state.go('home.movies')
        }
    }

    MoviesController.$inject = ['MovieFactory', '$filter', '$state', 'Auth'];

    angular
        .module('flix4me')
        .controller('MoviesController', MoviesController);
}());
