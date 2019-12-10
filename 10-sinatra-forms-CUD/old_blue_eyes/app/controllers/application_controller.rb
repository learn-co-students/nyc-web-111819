require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, 'true'
  end

  # INDEX Action/Method
  get "/achievements" do
    @achievements = Achievement.all 
    erb :index
  end
  
  # NEW Action/Method
  get "/achievements/new" do
    erb :new
  end

  # SHOW Action/Method
  get "/achievements/:id" do
    @achievement = Achievement.find(params[:id]) 
    erb :show
  end 

  # CREATE Action/Method
  post "/achievements" do
    # Achievement.create(title: params[:title], year: params[:year], category: params[:category])
    achievement = Achievement.create(params)
    
    redirect to "/achievements/#{achievement.id}"
  end
  
  # EDIT Action/Method
  get '/achievements/:id/edit' do
    @achievement = Achievement.find(params[:id])

    erb :edit
  end

  patch '/achievements/:id' do
    achievement = Achievement.find(params[:id])

    achievement.update(params[:achievement])

    redirect to "/achievements/#{achievement.id}"
  end




end
