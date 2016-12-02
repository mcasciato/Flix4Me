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

      function createComment() {
        return CommentFactory.newComment($stateParams, ctrl.comment)
                             .then(function(data) {
                                 $state.go('home.movies')
                             })
      };

    };

    NewCommentController.$inject = ['$stateParams', '$state', 'CommentFactory'];

    angular
        .module('flix4me')
        .component('comments', comments)
}());
