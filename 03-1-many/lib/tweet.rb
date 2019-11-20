class Tweet

  attr_reader :content, :timestamp, :user

  @@all = []

  def initialize(content, user)
    @content = content
    @user = user

    @timestamp = Time.now
    
    @@all << self
  end

  def self.all_characters_ever
    total_count = 0
    @@all.each do |tweet|
      total_count += tweet.content.length
    end
    total_count
  end

  def self.average_length
    self.all_characters_ever / @@all.length
  end

  def self.all
    @@all
  end

end