(function() {

    'use strict';

    function HomeController($scope, Auth, $state) {
        var vm = this

        vm.signedIn = Auth.isAuthenticated;
        vm.logout = Auth.logout;
        vm.getCurrentUser = getCurrentUser;

        activate();

        function activate() {
            getCurrentUser()
        }

        function getCurrentUser() {
            return Auth.currentUser()
                       .then(setCurrentUser)
        }

        function setCurrentUser(user) {
            console.log(user);
            return vm.user = user;
        };

        $scope.$on('devise:new-registration', function(e, user){
            return vm.user = user;
        });
        $scope.$on('devise:login', function(e, user){
            return vm.user = user;
        });
        $scope.$on('devise:logout', function(e, user){
            return vm.user = {};
        });

    }

    HomeController.$inject = ['$scope', 'Auth', '$state']

    angular
        .module('flix4me')
        .controller('HomeController', HomeController)

}());
