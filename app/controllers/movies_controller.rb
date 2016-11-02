class MoviesController < ApplicationController
    before_action :authenticate_user!, only: [:create, :update, :destroy]

    def index
        movies = Movie.all
        render json: movies
    end
end
