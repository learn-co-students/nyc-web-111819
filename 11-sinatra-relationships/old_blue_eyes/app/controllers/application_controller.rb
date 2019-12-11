require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, 'true'
  end

  #INDEX
  get "/achievements" do
    @achievements = Achievement.all
    erb :index
  end

  #NEW
  get "/achievements/new" do
    erb :new
  end

  #CREATE
  post "/achievements" do
    achievement = Achievement.create(params)
    redirect to "/achievements/#{achievement.id}"
  end

  #SHOW
  get "/achievements/:id" do
    @achievement = Achievement.find(params[:id])
    erb :show
  end

  #EDIT
  get "/achievements/:id/edit" do
    @achievement = Achievement.find(params[:id])
    erb :edit
  end

  #UPDATE
  patch "/achievements/:id" do
    achievement = Achievement.find(params[:id])
    achievement.update(params[:achievement])
    redirect to  "/achievements/#{achievement.id}"
  end

  
end
