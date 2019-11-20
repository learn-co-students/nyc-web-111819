require 'pry'
require_relative './lib/user'
require_relative './lib/tweet'

user1 = User.new("coffee_dad", "Just a dad who loves his coffee. ☕️")
user2 = User.new("thejbug247", "On AIM 24/7")
user3 = User.new("XxreddarknessxX", "whatever...")

tweet1 = Tweet.new("getting coffee", user1)
tweet2 = Tweet.new("blah blah blah", user2)
tweet3 = Tweet.new("I ❤ Flatiron", user3)
tweet4 = Tweet.new("The world is pain.", user1)

binding.pry