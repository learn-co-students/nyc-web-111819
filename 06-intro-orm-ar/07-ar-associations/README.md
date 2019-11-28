## SWBATS
* Use Active Record to build a CLI app.
* Set up relationships using activerecord macros.
  * has_many
  * belongs_to
  * has_many `model`, through: `another_relationship`

## Ingredients:
* Gemfile *Keeps track of dependencies/libraries we're using for this project*
  * [activerecord](https://guides.rubyonrails.org/active_record_basics.html#overriding-the-naming-conventions) (connects my models to my database)
  * [rake](https://github.com/ruby/rake)
  * [sinatra-activerecord](https://github.com/janko/sinatra-activerecord) (this contains rake tasks that we will use)
  * [pry](https://github.com/pry/pry)
  * [sqlite3](https://github.com/sparklemotion/sqlite3-ruby)

## Convention over Configuration
This is a belief that the rails (ruby) community tries to adhere to: If you follow convention, then you will have to do less configuration.
For example:
  * model names should be singular (and CapitalCase)
  * table names should be plural   (and snake_case)
  * if your SQL table name is: `dog_food_brands`
  * then your model needs to be : `class DogFoodBrand`
    * you can always double check by doing `#singularize` or `#pluralize`