require 'pry'
# clown1 = {
#   name: "Wacky",
#   age: 33,
#   skill: "make ballon animals",
#   fear: "porcupines"
# }

# clown2 = {
#   name: "Bluster",
#   age: 44,
#   skill: "juggling",
#   fear: "red noses"
# }

# clown3 = {
#   name: "Flaky",
#   age: 32,
#   skills: "pie throwing",
#   fear: "children"
# }

# clown4 = {
#   name: "Raspy",
#   age: 24,
#   skill: "haunting your dreams",
#   fear: "other clowns"
# }

# clown5 = {
#   name: "Krusty",
#   age: 39,
#   skill: "giving a creepy smile",
#   fear: "parties"
# }

# clown6 = {
#   name: "Fohn Fayne",
#   age: 21,
#   skill: "fitting in small cars",
#   fear: "flowers"
# }

# def introduce(clown_hash)
#   puts "
#     Hello!! My name is #{clown_hash[:name]},
#     my specialty is #{clown_hash[:skill]},
#     I hate #{clown_hash[:fear]}
#   "
# end

class Clown
  attr_accessor :name, :skill
  attr_reader :age
  attr_writer :fear

  @@all = []

  def initialize(name, age, skill, fear)
    puts "making a new clown..."
    @name = name
    @age = age
    @skill = skill
    @fear = fear

    @@all << self

    puts "finished making a new clown..."
  end

  def introduce
    regular_variable = "something"
    @regular_variable = "kinda different"
    @@regular_variable = "different from the other two"

    puts "
      Hello!! My name is #{name},
      my specialty is #{skill},
      I hate #{@fear}
    "
  end

  def update_profile(new_name, fear, skill)
    self.name = new_name
    self.fear = fear
    self.skill = skill
  end

  def Clown.all
    @@all
  end

  def self.average_age
    # add up the ages of all the clowns
    # divide by the number of clowns 

    total_age = 0
    @@all.each do |clown|
      total_age += clown.age
    end

    total_age / @@all.length
  end

  def self.poop
    self
    "💩"
  end

end

clown1 = Clown.new("Tony", 99, "basketball", "mta")
clown2 = Clown.new("Pennywise", 400, "killing kids", "bravery")
clown3 = Clown.new("MTA", 54, "delays", "fare evasion")
clown4 = Clown.new("Tony", 99, "basketball", "mta")


binding.pry