(function() {
    'use strict';

    function MoviesShowController(MovieFactory, $stateParams, $state, Auth) {

    }

    MoviesShowController.$inject = ['MovieFactory', '$stateParams', '$state', 'Auth'];

    angular
        .module('flix4me')
        .controller('MoviesShowController', MoviesShowController);
}());
