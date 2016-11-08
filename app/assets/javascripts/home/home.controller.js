(function() {

    'use strict';

    function HomeController($scope) {
        $scope.name = 'Michael is Home'
    }

    HomeController.$inject = ['$scope']

    angular
        .module('flix4me')
        .controller('HomeController', HomeController)



}());
