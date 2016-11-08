(function () {

    'use strict';

    function TvShowFactory($http) {
        return {
            getTvShows: getTvShows
        }

        function getTvShows() {
            return $http.get('/tv_shows')
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
        .factory('TvShowFactory', TvShowFactory)
}());
