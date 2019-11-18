require 'pry'


# each - for everything in a list, do something
[1,2,3,4].each do |num|
  puts num
end


# map - for everything in a list, transform into something
tranformed_array = [1,2,3,4].map do |num|
  "poop" * num
end

# find - for everything in a list, return the first thing where the block evaluates to true
found_element = [1,2,3,4].find do |num|
  true
end

# select - similar to find but returns an array of elements where the block evaluates to true
found_elements = [1,2,3,4,5].select do |num|
  false
end



fruit_basket = { 
  "apples" => 2, 
  "pears" => 5,
  "kiwi" => 10,
  "pineapple" => 3
}

artist_ratings = {
  jay_z: 10,
  beyonce: 10,
  billy_ray_cyrus: 10
}