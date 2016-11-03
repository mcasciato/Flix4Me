class TvShowsController < ApplicationController
    before_action :authenticate_user!, only: [:create, :update, :destroy]

    def index
        tv_shows = TvShow.all
        render json: tv_shows
    end

    def show
        tv_show = TvShow.find_by_id(params[:id])
        render json: tv_show
    end
end
