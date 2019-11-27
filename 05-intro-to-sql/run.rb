require 'pry'

class Card
  @@all = []

  def initialize
    @card = "a card :)"

    @@all << self
  end

  def self.all
    @@all
  end

end

Card.new
Card.new

binding.pry

