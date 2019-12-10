class CreateAchievements < ActiveRecord::Migration
  def change
    create_table :achievements do |t|
      t.string :title
      t.string :category
      t.integer :year
      t.string :img_url
    end 
  end
end
