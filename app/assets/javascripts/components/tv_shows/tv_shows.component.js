(function () {

    'use strict';

    var tvshows = {
        transclude: true,
        controller: TvShowComponentController,
        templateUrl: 'components/tv_shows/tv_shows.html'
    }

    function TvShowComponentController(TvShowFactory) {
        var ctrl = this

        activate()

        function activate() {
            getTvShows()
        }

        function getTvShows() {
            return TvShowFactory.getTvShows()
                               .then(setTvShows)
        }

        function setTvShows(data) {
            ctrl.tvshows = data
        }
    }

    angular
        .module('flix4me')
        .component('tvshows', tvshows)
}());
