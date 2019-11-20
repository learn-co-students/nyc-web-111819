class User

  attr_accessor :username, :bio

  @@all = []

  def initialize(username, bio = "")
    @username = username
    @bio = bio

    @@all << self
  end

  def tweets
    # look through all the tweets.
    # only pick the tweets that belongs to me.

    # each
    # map
    # select <<< because we are filtering
    # find

    # tweets = []
    # Tweet.all.each do |tweet|
    #   if tweet.user == self
    #     tweets << tweet
    #   end
    # end
    # tweets

    Tweet.all.select { |tweet| tweet.user == self }
  end

  def tweet_count
    tweets.length
  end

  def create_tweet(content)
    Tweet.new(content, self)
  end

  def all_tweet_characters
    # list all tweets for THIS user
    # add up all the characters for those tweets
    total_characters = 0
    tweets.each do |tweet|
      total_characters += tweet.content.length
    end
    total_characters
  end

  def self.all
    @@all
  end

end