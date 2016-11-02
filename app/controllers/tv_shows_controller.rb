class TvShowsController < ApplicationController
    before_action :authenticate_user!, only: [:create, :update, :destroy]

    def index
        tv_shows = TvShow.all
        render json: tv_shows
    end
end
