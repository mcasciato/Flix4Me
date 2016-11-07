(function() {
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
        };

        function setMovies(data) {
            return vm.movies = data;
        };

        function refilter() {

        }
    };

    MoviesController.$inject = ['MovieFactory', '$filter', '$state', 'Auth']

    angular
        .module('flix4me')
        .controller('MoviesController', MoviesController)
}());
