(function() {

    'use strict';

    function HomeController($scope, Auth, $state) {
        var vm = this

        vm.signedIn = Auth.isAuthenticated;
        vm.logout = Auth.logout;
        vm.getCurrentUser = getCurrentUser;

                
    }

    HomeController.$inject = ['$scope', 'Auth', '$state']

    angular
        .module('flix4me')
        .controller('HomeController', HomeController)



}());
