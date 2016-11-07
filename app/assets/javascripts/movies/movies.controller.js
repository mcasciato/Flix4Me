function MoviesController(MovieFactory) {
    var vm = this;

    vm.getMovies = getMovies;

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
};

MoviesController.$inject = ['MovieFactory']

angular
    .module('flix4me')
    .controller('MoviesController', MoviesController);
