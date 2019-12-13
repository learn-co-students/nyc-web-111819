class StudentsController < ApplicationController

  # get '/students' do   
  def index
    @students = Student.all
    # render :index
  end 

  # get '/students/:id' do
  def show 
    @student = Student.find(params[:id])
    # render :show
  end 

end
