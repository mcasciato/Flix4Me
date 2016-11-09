class TvShowsController < ApplicationController
    before_action :authenticate_user!, only: [:create, :update, :destroy]

    def index
        tv_shows = current_user.tv_shows
        render json: tv_shows
    end

    def show
        tv_show = TvShow.find_by_id(params[:id])
        render json: tv_show
    end

    def create
        tv_show = current_user.tv_shows.new(tv_show_params)
        if tv_show.save
            render json: { status: 201 }
        else
            render json:
                { errors: tv_show.errors.full_messages },
                status: 422
        end
    end

    def update
        tv_show = TvShow.find_by_id(params[:id])
        if tv_show.update(tv_show_params)
            render json: { status: 201 }
        else
            render json:
                { errors: tv_show.error.full_messages },
                status: 422
        end
    end

    def destroy
        tv_show = TvShow.find_by_id(params[:id])
        if tv_show.user == current_user.id
            if tv_show.destroy
                render json: { status: 201 }
            else
                render json:
                    { errors: tv_show.errors.full_messages },
                    status: 422
            end
        end
    end

    private

    def tv_show_params
        params.require(:tv_show).permit(:title, :year, :genre, :plot, :rating)
    end
end
