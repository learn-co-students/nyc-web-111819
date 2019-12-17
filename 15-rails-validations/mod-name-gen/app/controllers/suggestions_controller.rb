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
    
    # suggestion = Suggestion.new(suggestion_params)
    if suggestion.valid?
      redirect_to suggestion_path(suggestion)
    else 
      flash[:messages] = suggestion.errors.full_messages

      redirect_to new_suggestion_path
    end


  end 

  # def edit 
  #   # @suggestion = Suggestion.find(params[:id]) # BEFORE ACTION
  #   # render :edit
  # end 

  def update 
    # @suggestion = Suggestion.find(params[:id]) # BEFORE ACTION
    if @suggestion.update(suggestion_params)
      redirect_to suggestion_path(@suggestion)
    else  
      flash[:messages] = @suggestion.errors.full_messages

      redirect_to edit_suggestion_path(@suggestion)
    end 
  end 

  def destroy
    # @suggestion = Suggestion.find(params[:id])
    @suggestion.destroy

    redirect_to suggestions_path
  end 

  private 

  def suggestion_params
    params.require(:suggestion).permit(:name, :slogan, :hype_rating, :img_url)
  end

  def find_suggestion
    @suggestion = Suggestion.find(params[:id])
  end
end
