require 'rest-client'
require 'json'
require 'pry'


url = "https://www.googleapis.com/books/v1/volumes?q="


# ------------------  Prompt and capture user Actions/Input -------------------------------
  # Welcome message - Welcome to Book Finder
  puts 'Welcome, Nerd, to Book Finders'
  # What topic are you looking for? (type in topic)
  puts "What are you interested in, NERD!?!? (please type in a topic)"
  # Get the user input
  user_input = gets.chomp

# ------------------ Make Get data from API or Personal Database -------------------------------
# Get request to topic
response = RestClient.get(url + user_input)
# Parse response
res_hash = JSON.parse(response)

# ------------------  Format and display information fo ruser to view -------------------------------
# Render/display book list 
res_hash["items"].each do |book|
  #? title
  puts "TITLE:"
  puts  book["volumeInfo"]["title"]
  #? Authors 
  puts "Authors"
  puts book["volumeInfo"]["authors"]
  #? Description
  puts "Description"
  puts book["volumeInfo"]["description"]

  puts '*' * 80
  puts ''
end 

# show user how many items the API gave back.
puts "You got #{res_hash["items"].length} books back" 




puts 'TEST'
binding.pry

