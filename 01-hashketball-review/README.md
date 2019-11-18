### How to participate in lecture
* Don’t wait for the answer
    * make a hypothesis based on the context and knowledge you have so far.
    * even if you don't plan on raising your hand, form a hypothesis in your head.
* Don’t be afraid to give the wrong answer.
* If you get tired or sleepy, do whatever it takes to stay awake.
    * jumping jacks
    * stand in the back
    * I don't care as long as it is not distracting others.

### How to make the most of the labs
* RSPEC and TDD --f-f
* please don't just keep guessing till all the lights turn green.


## SWBATS
* Identify common data types in Ruby.
* Explain what these iterators do:
    * #each
    * #select
    * #map
    * #find
* Create Methods
    * basically allow us to organize our procedures



### Data Types
* Strings  - some data representing text
    * to_i
    * to_f
* Integers - some data represting numbers
* Boolean  - true or false
    * !!

* Arrays
    * indices
    * how to access something.
* Hash - like a dictionary, where key is the word, value is the definition.
    * keys
    * values
    * symbols

### Enumerable Methods in ruby
* each
* map - put whatever the block returns in a new array
* find - return the first thing that returns true 
* select - returns all the things that returned true

### Methods in ruby
* Implicit return
* Explicit return
* binding.pry


```ruby
def game_hash
    # returns a big hash with relavant data
end

def all_players
    game_hash[:home][:players].concat(game_hash[:home][:players])
end

def find_player(player_name)
    all_players.find { |player| player[:player_name] == player_name }
end

def num_points_scored(player_name)
    find_player(player_name)[:points]
end
```
We didn't have to make so many different methods, but now the code is more readable, updatable and modular because we did.

### number_points_scored
* break large problems into small problems
* get quick feedback loop (code something, try it out)
