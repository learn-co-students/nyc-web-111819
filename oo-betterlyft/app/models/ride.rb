class Ride
  attr_reader :driver, :passenger, :distance

  @@all = []

  def initialize(driver, passenger, distance)
    @driver = driver
    @passenger = passenger
    @distance = distance

    @@all << self
  end

  def self.all
    @@all
  end

  def self.average_distance
    total_distance = 0

    @@all.each do |ride|
      total_distance += ride.distance
    end

    total_distance / @@all.length
  end


end