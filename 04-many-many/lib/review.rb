class Review
  attr_accessor :content
  attr_reader :user, :movie, :timestamp

  @@all = []

  def initialize(content, user, movie)
    @content = content
    @user = user #make sure you put instance of user for argument
    @movie = movie #make sure you put instance of movie for argument

    @timestamp = Time.now

    @@all << self
  end


  def self.all
    @@all
  end
end