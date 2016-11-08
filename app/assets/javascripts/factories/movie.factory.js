(function(){
    'use strict';

    function MovieFactory($http) {
        return {
            getMovies: getMovies
        }

        function getMovies() {
            return $http.get('/movies')
                        .then(handleSuccess)
                        .catch(handleError)
        }
    }

    angular
        .module('flix4me')
        .factory('MovieFactory', MovieFactory)
}());
