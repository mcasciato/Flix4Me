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

        function handleSuccess(response) {
            console.log(response)
            return response.data
        }

        function handleError(error) {
            console.log(error)
        }
    }

    angular
        .module('flix4me')
        .factory('MovieFactory', MovieFactory)
}());
