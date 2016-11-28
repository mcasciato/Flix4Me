(function(){
    'use strict';

    var comments = {
      transclude: true,
      templateUrl: 'comments/comments.html',
      controller: NewCommentController
    };

    function NewCommentController($stateParams, $state, CommentFactory) {

    };

    NewCommentController.$inject = ['$stateParams', '$state', 'CommentFactory'];

    angular
        .module('flix4me')
        .component('comments', comments)
}());
