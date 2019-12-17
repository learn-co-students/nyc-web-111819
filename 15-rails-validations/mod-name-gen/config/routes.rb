Rails.application.routes.draw do
  resources :votes, only: [:new, :create]
  resources :users, only: [:index, :show]
  resources :suggestions


# VOTE ROUTES
  # post '/votes',  to: 'votes#create', as: 'votes'
  # get '/votes/new', to: 'votes#new', as: 'new_vote'

#USER ROUTES
  # get '/users', to: 'users#index', as: 'users'
  # get '/users/:id', to: 'users#show', as: 'user'

#SUGGESTION ROUTES
  # get '/suggestions', to: 'suggestions#index', as: 'suggestions'
  # get '/suggestions/:id', to: 'suggestions#show', as: 'suggestion'

  # get '/suggestions/new', to: 'suggestions#new', as: 'new_suggestion'
  # get '/suggestions', to: 'suggestions#create', as: 'suggestions'

  # get '/suggestions/:id/edit', to: 'suggestions#edit', as: 'edit_suggestion'
  # patch '/suggestions/:id', to: 'suggestions#update', as: 'suggestion'

  # delete '/suggestions/:id', to: 'suggestions#destroy', as: 'suggestion'








  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
