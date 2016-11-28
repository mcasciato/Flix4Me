(function(){
    'use strict';

    var comments = {
      transclude: true,
      templateUrl: 'comments/comments.html',
      controller: NewCommentController
    };

    function NewCommentController($stateParams, $state, CommentFactory) {

      var ctrl = this;
      ctrl.postComment = postComment;

      function postComment() {
        return CommentFactory.newComment($stateParams, ctrl.comment);
      };

    };

    NewCommentController.$inject = ['$stateParams', '$state', 'CommentFactory'];

    angular
        .module('flix4me')
        .component('comments', comments)
}());
