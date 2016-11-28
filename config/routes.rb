Rails.application.routes.draw do
    root 'application#index'

    devise_for :users

    resources :users, only: [:show, :edit]
    resources :movies, only: [:create, :update, :destroy, :index, :show] do
        resources :comments, only: [:create, :index]
    end
    resources :tv_shows, only: [:create, :update, :destroy, :index, :show]
end
