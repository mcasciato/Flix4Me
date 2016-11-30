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
      ctrl.addComment = addComment;

      function postComment() {
        return CommentFactory.newComment($stateParams, ctrl.comment);
      };

      function addComment(data) {
          var commentHtml = "<li class='list-group-item'>" + ctrl.comment.content + "</li>";
          $('#comments ul li:last').append(commentHtml);
      }

    };

    NewCommentController.$inject = ['$stateParams', '$state', 'CommentFactory'];

    angular
        .module('flix4me')
        .component('comments', comments)
}());
