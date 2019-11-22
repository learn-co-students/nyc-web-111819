require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end


p1 = Passenger.new("Tony")
p2 = Passenger.new("Helga")
p3 = Passenger.new("Pete")

d1 = Driver.new("Mike")
d2 = Driver.new("Riley")
d3 = Driver.new("Rob")

r1 = Ride.new(d1, p1, 4.15)
r2 = Ride.new(d1, p2, 10.15)
r3 = Ride.new(d2, p3, 1.15)
r4 = Ride.new(d2, p1, 100.15)



# Put your variables here~!

binding.pry
