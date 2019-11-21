require 'pry'

require_relative './lib/movie'
require_relative './lib/review'
require_relative './lib/user'

movie1 = Movie.new("The Godfather", "Mafia Thangzzz", 1972, 178)
movie2 = Movie.new("Star Wars", "Space mafia Thangzzz.", 1974, 100)
movie3 = Movie.new("Home Alone 3", "Home invasion Thangzzz.", 2000, 110)
movie4 = Movie.new("The Joker", "Clown pyscho murder mental health Thangzzz.", 2019, 138)

user1 = User.new("coffee_dad")
user2 = User.new("XxreddarknessxX")
user3 = User.new("theJbug247")
user4 = User.new("miss_cheese")

review1 = Review.new(
  "not enough coffee in this movie",
  user1,
  movie1
)

review2 = Review.new(
  "not enough coffee in this movie either",
  user1,
  movie2
)

review3 = Review.new(
  "Never seen it.",
  user3,
  movie1
)

review4 = Review.new(
  "I don't like scary movies 💢",
  user4,
  movie4
)

binding.pry
