Rails.application.routes.draw do
    root 'application#index'

    devise_for :users

    resources :users, only: [:show, :edit]
    resources :movies, only: [:create, :update, :destroy, :index, :show] do
        member do
            put '/upvote' => 'movies#upvote'
        end
        resources :comments, only: [:create, :index] do
            member do
                put '/upvote' => 'comment#upvote'
            end
        end
    end
end
