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
        vm.view = view;

        vm.search = '';
        vm.searchGenre = '';

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
            vm.movies = data;
            for (var i = 0; i < vm.movies.length; i++) {
                vm.movies[i].views = 0
            }
            return vm.movies
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
            if (vm.search && !vm.searchGenre) {
                return vm.filteredList = $filter('filter')(vm.movies, vm.search)
            } else if (vm.searchGenre && !vm.search) {
                return vm.filteredList = $filter('filter')(vm.movies, vm.searchGenre)
            } else {
                vm.filteredGenreList = $filter('filter')(vm.movies, vm.searchGenre);
                return vm.filteredList = $filter('filter')(vm.filteredGenreList, vm.search)
            }
        }

        function resetMovies() {
            return vm.filteredList = vm.movies;
        }

        function view(index) {
            vm.movies[index].views ++;
        }
    }

    MoviesController.$inject = ['MovieFactory', '$filter', '$state', 'Auth'];

    angular
        .module('flix4me')
        .controller('MoviesController', MoviesController);
}());
