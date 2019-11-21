class User
  attr_accessor :username

  @@all = []

  def initialize(username)
    @username = username

    @@all << self
  end


  def reviews
    Review.all.select do |review|
      review.user == self
    end
  end

  def review_contents
    reviews.map { |review| review.content }
  end

  def movies
    reviews.map { |review| review.movie }
  end



  def self.all
    @@all
  end
end