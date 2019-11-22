
class Passenger
  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name

    @@all << self
  end

  def rides
    # look through all rides ever created
    # but only keep the ones that belong to ME (the passenger)
    Ride.all.select do |ride|
      ride.passenger == self
    end
  end


  def drivers
    # come back to this later
    rides.map do |ride|
      ride.driver
    end
  end


  def total_distance
    # come back to this later
    total = 0
    rides.each do |ride|
      total += ride.distance
    end
    total
  end

  def self.all
    @@all
  end

  def self.premium_members
    # come back to this later 
    @@all.select do |passenger|
      passenger.total_distance > 100
    end
  end

  def self.premium_member_names
    self.premium_members.map do |passenger|
      passenger.name
    end
  end
end

# each   --> go over a list of stuff
# select --> filtering
# map    --> transforming
# find   --> return just one thing
