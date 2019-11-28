require 'pry'

class Pet

  def initialize(name, breed)
    @name = name
    @breed = breed
  end

  def name
    @name
  end

  def breed
    @breed
  end

  def vocalization
    puts "Your Pet says:"
  end
end


class Cat < Pet

  def initialize(name, breed, stray)
    super(name, breed)
    @stray = stray
  end

  def stray
    @stray
  end

  def vocalization
    super
    ["meow", "purr"].sample
  end

  def furball
    @furball
  end
end

class Dog < Pet

  def vocalization
    ["woof", "growl", "whimper", "whine"].sample
  end

  def vomit?
    @vomit
  end
end


binding.pry