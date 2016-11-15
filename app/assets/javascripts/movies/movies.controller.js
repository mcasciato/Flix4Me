(function() {
    'use strict';

    function MoviesController(MovieFactory, $filter, $state, Auth) {

    }

    MoviesController.$inject = ['MovieFactory', '$filter', '$state', 'Auth'];

    angular
        .module('flix4me')
        .controller('MoviesController', MoviesController);
}());
