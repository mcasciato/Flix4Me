(function(){
    'use strict';

        function CommentFactory($http) {
            return {
                newComment: newComment,
            }

        }

        CommentFactory.$inject = ['$http'];

    angular
        .module('flix4me')
        .factory('CommentFactory', CommentFactory)
}());
