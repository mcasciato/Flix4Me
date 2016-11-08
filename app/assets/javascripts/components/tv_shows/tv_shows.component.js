(function () {

    'use strict';

    var tv_shows = {
        transclude: true,
        controller: TvShowComponentController,
        templateUrl: 'components/tv_shows/tv_shows.html'
    }

    angular
        .module('flix4me')
        .component('tv_shows', tv_shows)
}());
