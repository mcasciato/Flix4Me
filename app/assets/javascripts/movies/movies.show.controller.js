(function() {
    'use strict';

    function MoviesShowController(MovieFactory, $stateParams, $state, Auth) {
        var vm = this;

        vm.getMovie = getMovie;
        vm.signedIn = Auth.isAuthenticated();
        vm.getCurrentUser = getCurrentUser;

        activate();

        
    }

    MoviesShowController.$inject = ['MovieFactory', '$stateParams', '$state', 'Auth'];

    angular
        .module('flix4me')
        .controller('MoviesShowController', MoviesShowController);
}());
