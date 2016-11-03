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

    def create
        tv_show = current_user.tv_shows.create(tv_show_params)
        if tv_show.save
            render json: { status: 201 }
        else
            render json:
                { errors: tv_show.errors.full_messages },
                status: 422
        end
    end

    def update

    end

    def destroy

    end

    private

    def tv_show_params
        params.require(:tv_show).permit(:title, :year, :genre, :plot, :rating)
    end
end
