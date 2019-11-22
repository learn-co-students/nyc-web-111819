class Driver

  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name

    @@all << self
  end


  def passenger_names
    rides.map do |ride|
      ride.passenger.name
    end
  end

  def rides
    Ride.all.select do |ride|
      ride.driver == self
    end
  end

  def miles_driven
    miles_driven = 0
    rides.each do |ride|
      miles_driven += ride.distance
    end

    miles_driven
  end


  def self.all
    @@all
  end

  # - `Driver.mileage_cap(distance)`
  # - Takes an argument of a distance 
  # (float) and returns an array of all 
  # Drivers who have driven over the mileage

  def self.mileage_cap(distance)
    # look through all the drivers
    # only return drivers who had driven over a certain amount
    #   calculate the total distance for each driver

    @@all.select do |driver|
      driver.miles_driven > distance
    end
  end

end