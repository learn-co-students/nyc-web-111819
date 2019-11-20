require 'pry'

class Person
  attr_accessor :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
    @hygiene = 8
  end

  def hygiene
    @hygiene
  end

  def hygiene=(number)
    if number > 10
      @hygiene = 10
    elsif number < 0
      @hygiene = 0
    else
      @hygiene = number
    end
  end

  # when self is inside of an instance method, it is referring to the instance that called it.
  def take_bath

  end

  def self.all
    @@all
  end

end



binding.pry