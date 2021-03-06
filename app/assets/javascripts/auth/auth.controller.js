(function() {
    'use strict';

    function AuthController($state, Auth) {
        var vm = this;

        vm.login = login;
        vm.register = register;

        function login() {
            Auth.login(vm.user)
                .then(goToList);
        };

        function register() {
            Auth.register(vm.user)
                .then(goToList)
        };

        function goToList() {
            $state.go('home.movies');
        }
    };

    AuthController.$inject = ['$state', 'Auth'];

    angular
        .module('flix4me')
        .controller('AuthController', AuthController);
}())
