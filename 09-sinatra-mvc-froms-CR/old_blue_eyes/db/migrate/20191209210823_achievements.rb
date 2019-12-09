class Achievements < ActiveRecord::Migration
  def change
    create_table :achievements do |t|
      t.string :category
      t.integer :year
      t.string :title
      t.string :img_url
    end 
  end
end
