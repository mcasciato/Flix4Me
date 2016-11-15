(function(){
    'use strict';

    function MovieFactory($http) {
        return {
            getMovies: getMovies,
            createMovie: createMovie,
            getMovie: getMovie,
            updateMovie: updateMovie
        }

        function getMovies() {
            return $http.get('/movies')
                        .then(handleSuccess)
                        .catch(handleError)
        }

        function createMovie(movie) {
            var req = {
                method: 'POST',
                url: '/movies',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    movie: movie
                }
            };

            return $http(req)
                        .then(handleSuccess)
                        .catch(handleError)
        }

        function getMovie(id) {
            return $http.get('/movies/' + id)
                        .then(handleSuccess)
                        .catch(handleError)
        }

        function updateMovie(movie) {
            var req = {
                method: 'PATCH',
                url: '/movies/' + movie.id,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                  movy: movy
                }
            };

            return $http(req)
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

    MovieFactory.$inject = ['$http'];

    angular
        .module('flix4me')
        .factory('MovieFactory', MovieFactory)
}());
