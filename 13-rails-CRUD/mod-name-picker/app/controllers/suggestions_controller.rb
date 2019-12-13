class SuggestionsController < ApplicationController
  before_action :find_suggestion, only: [:show, :update, :edit, :delete]

  def index
    @suggestions = Suggestion.all
    # render :index
  end 
  
  # def show
  # end 

  def new 
    @suggestion = Suggestion.new
    # render :new
  end 

  def create  
    suggestion = Suggestion.create(suggestion_params)

    redirect_to suggestion_path(suggestion)
  end 

  def edit 
    # @suggestion = Suggestion.find(params[:id])
    # render :edit
  end 

  def update 
    # suggestion = Suggestion.find(params[:id])
    @suggestion.update(suggestion_params)

    redirect_to suggestion_path(@suggestion)
  end 

  def delete 
    # @suggestion = Suggestion.find(params[:id])
  end 

  private 

  def suggestion_params
    params.require(:suggestion).permit(:name, :slogan, :img_url)
  end

  def find_suggestion
    @suggestion = Suggestion.find(params[:id])
  end
  

end
