(function () {

    'use strict';

    var tvshows = {
        transclude: true,
        controller: TvShowComponentController,
        templateUrl: 'components/tv_shows/tv_shows.html'
    }

    function TvShowComponentController(TvShowFactory, $filter, $state) {
        var ctrl = this

        ctrl.refilter = refilter

        activate()

        function activate() {
            getTvShows()
        }

        function getTvShows() {
            return TvShowFactory.getTvShows()
                               .then(setTvShows)
                               .then(setFilteredList)
        }

        function setTvShows(data) {
            ctrl.tvshows = data
        }

        function setFilteredList() {
            return ctrl.filteredList = data;
        }

        function refilter() {

        }
    }

    angular
        .module('flix4me')
        .component('tvshows', tvshows)
}());
