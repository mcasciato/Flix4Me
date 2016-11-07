(function() {

    'use strict';

    function MoviesController(MovieFactory, $filter, $state, Auth) {
        var vm = this;

        vm.getMovies = getMovies;
        vm.refilter = refilter;

        activate();

        function activate() {
            getMovies;
        };

        function getMovies() {
            return MovieFactory.getMovies()
                               .then(setMovies)
                               .then(setFilteredList)
        };

        function setMovies(data) {
            return vm.movies = data;
        };

        function setFilteredList(data) {
            return vm.filteredList = data;
        }

        function refilter() {

        }
    };

    MoviesController.$inject = ['MovieFactory', '$filter', '$state', 'Auth']

    angular
        .module('flix4me')
        .controller('MoviesController', MoviesController)
}());
