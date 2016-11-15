(function() {
    'use strict';

    function MoviesShowController(MovieFactory, $stateParams, $state, Auth) {
        var vm = this;

        vm.getMovie = getMovie;
        vm.signedIn = Auth.isAuthenticated();
        vm.getCurrentUser = getCurrentUser;

        activate();

        function activate() {
            getMovie($stateParams.movieId)
            getCurrentUser();
        }

        function getCurrentUser() {
            return Auth.currentUser();
                       .then(setCurrentUser);
        }

        function setCurrentUser(user) {
            console.log(user);
            return vm.user = user;
        }
    }

    MoviesShowController.$inject = ['MovieFactory', '$stateParams', '$state', 'Auth'];

    angular
        .module('flix4me')
        .controller('MoviesShowController', MoviesShowController);
}());
