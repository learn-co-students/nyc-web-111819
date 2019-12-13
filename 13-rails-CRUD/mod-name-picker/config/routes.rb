Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :suggestions, only: [:index, :show, :new, :create, :edit, :update]

  
  
  
  #HTTP Verb   |     URL   |   contorller & action  | Route Helper

  # get '/suggestions', to: 'suggestions#index', as: 'suggestions'
  # get '/suggestions/:id', to: 'suggestions#show', as: 'suggestion'
  
  # get '/suggestions/new', to: 'suggestions#new', as: 'new_suggestion'
  # post '/suggestions', to: 'suggestions#create'
  
  # get '/suggestions/:id/edit', to: 'suggestions#edit'
  # patch '/suggestions/:id', to: 'suggestions#update'
  
  # delete '/suggestions/:id', to: 'suggestions#delete'
  
end
