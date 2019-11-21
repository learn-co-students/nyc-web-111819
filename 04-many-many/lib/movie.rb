class Movie
  @@all = []

  attr_reader :title, :runtime, :year_released
  attr_accessor :description


  def initialize(title, description, year_released, runtime)
    @title = title
    @description = description
    @runtime = runtime
    @year_released = year_released

    @@all << self
  end

  def reviews
    # return all reviews belonging to THIS movie
    Review.all.select { |review| review.movie == self }
  end

  def users
    reviews.map { |review| review.user }
  end

  def self.all
    @@all
  end

  def self.find_by_title(title)
    @@all.find do |movie|
      movie.title == title
    end
  end


end