(function(){
    'use strict';

        function CommentFactory($http) {
            return {
                newComment: newComment,
            }

            function newComment(params, commentData) {
                return $http.post('/movies/' + params.movieId + '/comments.json', commentData)
                            .then(handleSuccess)
                            .catch(handleError);
            }


            function handleSuccess(response) {
                console.log(response)
                return response.data
            }

            function handleError(error) {
                console.log(error)
            }
        }

        CommentFactory.$inject = ['$http'];

    angular
        .module('flix4me')
        .factory('CommentFactory', CommentFactory)
}());
