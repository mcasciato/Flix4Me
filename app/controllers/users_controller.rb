class UsersController < ApplicationController
    before_action :authenticate_user!, only: [:edit]

    def show
        user = User.find_by_id(params[:id])
        render json: user, include: ["movies", "tv_shows"]
    end

end
