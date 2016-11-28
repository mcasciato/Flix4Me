class CommentsController < ApplicationController
    def index

    end

    def create

    end

    private

        def comment_params
            params.require(:comment).permit(:content, :movie_id)
        end
end
