# Intro to Object Orientation
[Object Orientation](https://en.wikipedia.org/wiki/Object-oriented_programming)

## SWBATS
* Tell each other what the point of object oriented programming is.
* Make objects (instances)
* Tell each other about `self`
* attr_ macros, attr_accessor, attr_reader, attr_writer
* regular variables vs class variables vs instance variables

* instance methods vs class methods



### We model real world things/concepts into objects. 
* Objects have attributes (sometimes called state) - describes the object.
* Objects have behaviors - what the object can do.


### Everything is an Object in Ruby
  * `String.ancestors`
  * `Integer.ancestors`
  * `Array.ancestors`
  * `Hash.ancestors`

### Issue with using hashes to represent things:
  * If something has a typo
  * repeating code
  * cannot model behaviours (what if we wanted our clowns to be able to say hi?)
  * doesn't help you think in objects
  
---

### Using objects instead:
```ruby
class Clown

end

clown1 = Clown.new
# what type of data is clown1?
clown1.class
```
  * A class is like a blueprint of a thing
  * An *instance* is the thing

### Building out our objects:
  * `#initialize` determines what happens when we make a new instance of a class.
  * instance variables allow our instances to have state *(remember some data)*
  * creating getter methods will allow us to see instance variables
    * `attr_reader` is just syntatic sugar for a simple getter method.
  * creating setter methods will allow us to set values into instance variables.
    * `attr_writer` is just syntatic sugar for a simple writer method.
    * `attr_accessor` is just syntatic sugar for when you need both reader and writer.
  
  * we can create instance methods by just defining methods within a class.
    * instance methods can reference other instance methods.

### Deliverables
Create some clowns and get to know them 🤡!

Build clowns that have:
* a name
* an age
* a skill
* a fear
* bonus: a nickname

Build clowns that can:
* introduce themselves
* perform their skill
* tell you a secret

Create an array of clowns and be able to:
* Loop through them and have them say_hi, perform, and tell a secret
* Find all the clowns over 30
