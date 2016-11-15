(function() {
    'use strict';

    function MoviesController(MovieFactory, $filter, $state, Auth) {
        var vm = this;

        // callable methods
        vm.getMovies = getMovies;
        vm.createMovie = createMovie;
        vm.signedIn = Auth.isAuthenticated();
        vm.refilter = refilter;
        vm.resetMovies = resetMovies;

        vm.search = '';

        // instantiate
        activate();

        function activate() {
            getMovies();
        }

        function getMovies() {
            return MovieFactory.getMovies()
                               .then(setMovies)
                               .then(resetMovies);
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

        function refilter() {
            return vm.filteredList = $filter('filter')(vm.movies, vm.search)
        }

        function resetMovies() {
            return vm.filteredList = vm.movies;
        }
    }

    MoviesController.$inject = ['MovieFactory', '$filter', '$state', 'Auth'];

    angular
        .module('flix4me')
        .controller('MoviesController', MoviesController);
}());
