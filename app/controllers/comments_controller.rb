class CommentsController < ApplicationController
    def index
        comments = Movie.find_by_id(params[:movie_id]).comments
        render json: comments
    end

    def create
        movie = current_user.movies.find_by_id(params[:movie_id])
        comment = Comment.new(comment_params)
        comment.user_id = current_user.id
        comment.movie_id = params[:movie_id]
            if comment.save
                render json: comment
            else
                render json:
                    { errors: comment.errors.full_messages },
                    status: 422
            end
    end

    def upvote
		movie = Movie.find(params[:movie_id])
		comment = movie.comments.find(params[:id])
		comment.increment!(:upvotes)

		respond_with movie, comment
	end

    private

        def comment_params
            params.require(:comment).permit(:content, :movie_id, :user_id)
        end
end
