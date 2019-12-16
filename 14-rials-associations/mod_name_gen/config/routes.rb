Rails.application.routes.draw do
  resources :votes, only: [:new, :create]
  resources :users, only: [:show, :index]
  resources :suggestions
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
