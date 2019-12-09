require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  #INDEX Action
  get "/achievements" do
    @achievements = Achievement.all
    erb :index
  end

  #SHOW action
  get "/achievements/:id" do
    @achievement = Achievement.find(params[:id])
    erb :show
  end


end
