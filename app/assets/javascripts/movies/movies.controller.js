(function() {
    'use strict';

    function MoviesController(MovieFactory, $filter, $state, Auth) {
        var vm = this;

        // callable methods
        vm.getMovies = getMovies;

        // instantiate
        activate();

        function activate() {
            getMovies();
        }

        function getMovies() {
            
        }
    }

    MoviesController.$inject = ['MovieFactory', '$filter', '$state', 'Auth'];

    angular
        .module('flix4me')
        .controller('MoviesController', MoviesController);
}());
