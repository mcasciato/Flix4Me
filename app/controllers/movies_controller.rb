class MoviesController < ApplicationController
    before_action :authenticate_user!, only: [:create, :update, :destroy]

    def index
        movies = current_user.movies
        render json: movies
    end

    def show
        if current_user
            movie = current_user.movies.find_by_id(params[:id])
            render json: movie
        else
            render json:
                { errors: movies.errors.full_messages },
                status: 422
        end
        # movie = Movie.find_by_id(params[:id])
        # render json: movie
    end

    def create
        movie = current_user.movies.new(movie_params)
        if movie.save
            render json: { status: 201 }
        else
            render json:
                { errors: movies.errors.full_messages },
                status: 422
        end
    end

    def update
        movie = Movie.find_by_id(params[:id])
        if movie.update(movie_params)
            render json: { status: 201 }
        else
            render json:
                { errors: movie.errors.full_messages },
                status: 422
        end
    end

    def destroy
        if current_user
            movie = Movie.find_by_id(params[:id])
            if movie.destroy
                render json: { status: 201 }
            else
                render json:
                    { errors: movie.errors.full_messages },
                    status: 422
            end
        end
    end

    def upvote
		movie = Movie.find(params[:id])
		movie.increment!(:upvotes)

		respond_with movie
	end

    private

    def movie_params
        params.require(:movie).permit(:title, :year, :genre, :plot, :rating)
    end
end
