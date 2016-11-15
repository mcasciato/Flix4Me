(function() {
    'use strict';

    angular
        .module('flix4me', ['ui.router', 'templates', 'Devise', 'ngMessages'])
        .config(function($httpProvider) {
            // for CSRF errors
            $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
        });
}());
