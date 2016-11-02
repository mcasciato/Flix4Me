Rails.application.routes.draw do
  devise_for :users

  resources :movies, only: [:create, :update, :destroy, :index, :show]
  resources :tv_shows, only: [:create, :update, :destroy, :index, :show]
end
