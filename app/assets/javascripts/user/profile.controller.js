(function() {

    'use strict';

    function ProfileController(Auth, $state) {
        var vm = this

        vm.signedIn = Auth.isAuthenticated();

        if (vm.signedIn) {
            $state.go('home.profile')
        }
        // } else {
        //     alert("You must be logged in to view your profile")
        //     $state.go('home.login')
        // }
    };

    angular
        .module('flix4me')
        .controller('ProfileController', ProfileController)

}());
