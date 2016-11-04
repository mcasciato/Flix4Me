(function() {

    function HomeController() {
        var vm = this;

        vm.signedIn = Auth.isAuthenticated;
        vm.logout = Auth.logout;
        vm.getCurrentUser = getCurrentUser;

        activate();

        function activate() {
            getCurrentUser;
        };

        function getCurrentUser() {
            return Auth.currentUser()
                       .then(setCurrentUser);
        };

        function setCurrentUser(user) {
            console.log(user);
            return vm.user = user;
        };

    };

    angular
        .module('flix4me')
        .controller('HomeController', HomeController);
}());
