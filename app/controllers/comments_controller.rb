class CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: comments
    end

    def create
        movie = Movie.find_by_id(params[:movie_id])
        comment = movie.comments.new(comment_params)
            if comment.save
                render json: comment
            else
                render json:
                    { errors: comment.errors.full_messages },
                    status: 422
            end
    end

    private

        def comment_params
            params.require(:comment).permit(:content, :movie_id)
        end
end
