class VotesController < ApplicationController

  def new  
    @vote = Vote.new
    @suggestions = Suggestion.all
    @users = User.all

    render :new
  end 

  def create   
    vote = Vote.create(vote_params)
    # vote = Vote.new(params)
    # vote.save
    redirect_to suggestion_path(vote.suggestion_id)
  end 

  private 

  def vote_params
    params.require(:vote).permit(:suggestion_id, :user_id)
  end 
end
