class SuggestionsController < ApplicationController
  before_action :find_suggestion, only: [:show, :update, :edit, :destroy]

  def index
    @suggestions = Suggestion.all
    # render :index
  end 
  
  # def show
    # @suggestion = Suggestion.find(params[:id]) # BEFORE ACTION
  # end 

  def new 
    @suggestion = Suggestion.new
    # render :new
  end 

  def create  
    suggestion = Suggestion.create(suggestion_params)

    redirect_to suggestion_path(suggestion)
  end 

  # def edit 
  #   # @suggestion = Suggestion.find(params[:id]) # BEFORE ACTION
  #   # render :edit
  # end 

  def update 
    # @suggestion = Suggestion.find(params[:id]) # BEFORE ACTION
    @suggestion.update(suggestion_params)

    redirect_to suggestion_path(@suggestion)
  end 

  def destroy
    # @suggestion = Suggestion.find(params[:id])
    @suggestion.destroy

    redirect_to suggestions_path
  end 

  private 

  def suggestion_params
    params.require(:suggestion).permit(:name, :slogan, :img_url)
  end

  def find_suggestion
    @suggestion = Suggestion.find(params[:id])
  end
end
