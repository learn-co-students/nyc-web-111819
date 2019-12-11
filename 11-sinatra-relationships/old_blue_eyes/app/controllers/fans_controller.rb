class FansController < ApplicationController
  get "/fans" do 
    @fans = Fan.all
    erb :"fans/index"  
  end 

  get '/fans/new' do
    @achievements = Achievement.all
    erb :"fans/new"
  end

  post '/fans' do
    Fan.create(params)

    redirect to "/fans"
  end
end
