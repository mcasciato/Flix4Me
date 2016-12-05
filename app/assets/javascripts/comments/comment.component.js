(function(){
    'use strict';

    var comments = {
      transclude: true,
      templateUrl: 'comments/comments.html',
      controller: NewCommentController
    };

    function NewCommentController($stateParams, $state, CommentFactory) {

      var ctrl = this;
      ctrl.createComment = createComment;
      ctrl.getComments = getComments;

      function createComment() {
        return CommentFactory.newComment($stateParams, ctrl.comment)
                             .then(function(data) {
                                 $state.go('home.show', { movieId: data.movie_id })
                             })
                             .then(getComments)
      };

      function getComments() {
        return CommentFactory.getComments($stateParams, ctrl.comment)
                             .then(setComments);
      };

      function setComments(data) {
          return ctrl.comments = data;
      }

    };

    NewCommentController.$inject = ['$stateParams', '$state', 'CommentFactory'];

    angular
        .module('flix4me')
        .component('comments', comments)
}());
