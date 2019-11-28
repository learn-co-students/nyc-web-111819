require 'sqlite3'
require 'pry'

class Tea
  attr_reader :id, :name, :description
  DB = SQLite3::Database.new "./db/tea.db"

  def initialize(id, name, description)
    @id = id
    @name = name
    @description = description

  end

  def save
    DB.execute(
      <<-SQL
        INSERT INTO teas (name, description) VALUES ('#{self.name}', '#{self.description}');
      SQL
    )
  end

  def self.create(name, description)
    new_tea = Tea.new(nil, name, description)
    new_tea.save
    new_tea
  end

  def destroy
    DB.execute <<-SQL
      DELETE FROM teas WHERE id = #{self.id};
    SQL
  end

  def self.all
    # READ FROM THE TEA TABLE
    # MAP THE DATA INTO A LIST OF TEA INSTANCES

    DB.execute("SELECT * FROM teas;").map do |tea_row|
      Tea.new(tea_row[0], tea_row[1], tea_row[2])
    end
  end

  def self.find_by_name(name)
    # read from data base
    # return ruby instance
    found_tea_data = DB.execute(
    <<-SQL 
      SELECT * FROM teas WHERE name = '#{name}';
    SQL
    )[0]
    Tea.new(found_tea_data[0], found_tea_data[1], found_tea_data[2])
  end
  
end

binding.pry