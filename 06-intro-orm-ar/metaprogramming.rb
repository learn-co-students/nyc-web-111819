require 'pry'

class Car
  attr_accessor :year, :make, :model, :condition, :color, :mileage, :engine

  def initialize(car_hash)
    car_hash.each do |key, value|
      self.send("#{key}=", value)
    end
  end

  def update(car_hash)
    car_hash.each do |key, value|
      self.send("#{key}=", value)
    end
  end
end

binding.pry