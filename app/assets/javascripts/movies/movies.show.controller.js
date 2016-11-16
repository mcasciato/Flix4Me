(function() {
    'use strict';

    function MoviesShowController(MovieFactory, $stateParams, $state, Auth) {
        var vm = this;

        vm.getMovie = getMovie;
        vm.signedIn = Auth.isAuthenticated();
        vm.getCurrentUser = getCurrentUser;
        vm.updateMovie = updateMovie;
        vm.destroyMovie = destroyMovie;

        activate();

        function activate() {
            getMovie($stateParams.movieId)
            getCurrentUser();
        }

        function getCurrentUser() {
            return Auth.currentUser()
                       .then(setCurrentUser);
        }

        function setCurrentUser(user) {
            console.log(user);
            return vm.user = user;
        }

        function getMovie(id) {
            return MovieFactory.getMovie(id)
                               .then(setMovie);
        }

        function updateMovie() {
            if (vm.signedIn) {
                return MovieFactory.updateMovie(vm.movie)
                                   .then(showMovies);
            }
        }

        function destroyMovie(id) {
            return MovieFactory.destroyMovie(id)
                               .then(showMovies)
        }

        function setMovie(data) {
            return vm.movie = data;
        }

        function showMovie(data) {
            $state.go('home.show', { movieId: data.id });
        }

        function showMovies() {
            $state.go('home.movies');
        }
    }

    MoviesShowController.$inject = ['MovieFactory', '$stateParams', '$state', 'Auth'];

    angular
        .module('flix4me')
        .controller('MoviesShowController', MoviesShowController);
}());
