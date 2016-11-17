(function() {
    'use strict';

    angular
        .module('flix4me', ['ui.router', 'templates', 'Devise', 'ngMessages', 'angular.filter'])
        .config(function($httpProvider) {
            // for CSRF errors
            $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
        });
}());
