require_relative './config/environment'
ActiveRecord::Base.logger = nil

puts `clear`
puts "WELCOME TO TEA-CYCLOPEDIA"
puts "Enter name of tea you want to learn more about"

user_input = gets.chomp

found_tea = Tea.find_by(name: user_input)

if found_tea.nil?
  puts "sorry, couldn't find that tea..."
else
  puts `clear`
  puts "HERE IS SOME DATA ABOUT THE TEA:"
  puts found_tea.description
end