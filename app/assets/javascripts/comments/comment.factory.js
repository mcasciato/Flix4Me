(function(){
    'use strict';

        function CommentFactory($http) {
            return {
                newComment: newComment,
            }

            function newComment(params, commentData) {
                return $http.post('/movies/' + params.movieId + '/comments.json', commentData)
                            .then(handleSuccess)
                            .then(showComment)
                            .catch(handleError)
            }
        }

        CommentFactory.$inject = ['$http'];

    angular
        .module('flix4me')
        .factory('CommentFactory', CommentFactory)
}());
