class Api::V1::MoviesController < ApplicationController
  def index
    movies = Movie.all

    render json: movies, except: [:created_at, :updated_at]
  end

  def create
    movie = Movie.create(movie_params)

    render json: movie, except: [:created_at, :updated_at]
  end

  private

  def movie_params
    params.permit(:score, :title, :imageUrl, :year)
  end
end
