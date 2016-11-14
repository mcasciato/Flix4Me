(function () {

    'use strict';

    var showMovie = {
        transclude: true,
        controller: ShowMovieComponentController
        templateUrl: 'components/show-movie/show-movie.html'
    }

    function ShowMovieComponentController(MovieFactory, Auth, $state) {
        var ctrl = this;

        ctrl.getMovie = getMovie;
        // ctrl.updateMovie = updateMovie;
        // ctrl.destroyMovie = getMovie;
        ctrl.signedIn = Auth.isAuthenticated();
        ctrl.getCurrentUser = getCurrentUser;

        activate();

        function activate() {
            getCurrentUser();
        };

        function getCurrentUser() {
            return Auth.currentUser()
                       .then(setCurrentUser);
        }

        function setCurrentUser(user) {
            // console.log(user);
            return vm.user = user;
        }

    }

    angular
        .module('flix4me')
        .component('showMovie', showMovie)
}());
