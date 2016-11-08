(function() {

    'use strict';

    var tabs = {
        transclude: true,
        controller: TabsController;
        templateUrl: 'components/tab-component/tabs.html'
    }

    
    angular
        .module('flix4me')
        .component('tabs', tabs)
}());
