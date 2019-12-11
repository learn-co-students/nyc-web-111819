class AchievementsController < ApplicationController
  #INDEX
  get "/achievements" do
    @achievements = Achievement.all
    erb :"achievements/index"
  end

  #NEW
  get "/achievements/new" do
    erb :"achievements/new"
  end

  #CREATE
  post "/achievements" do
    achievement = Achievement.create(params)
    redirect to "/achievements/#{achievement.id}"
  end

  #SHOW
  get "/achievements/:id" do
    @achievement = Achievement.find(params[:id])
    erb :"achievements/show"
  end

  #EDIT
  get "/achievements/:id/edit" do
    @achievement = Achievement.find(params[:id])
    erb :"achievements/edit"
  end

  #UPDATE
  patch "/achievements/:id" do
    achievement = Achievement.find(params[:id])
    achievement.update(params[:achievement])
    redirect to  "/achievements/#{achievement.id}"
  end

  # DELETE 
  delete '/achievements/:id' do
    achievement = Achievement.find(params[:id])
    achievement.destroy 
    
    redirect to "/achievements"
  end
  
end
