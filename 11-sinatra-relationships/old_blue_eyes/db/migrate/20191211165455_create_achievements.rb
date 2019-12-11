class CreateAchievements < ActiveRecord::Migration
  def change
    create_table :achievements do |t|
      t.string :title
      t.string :category
      t.string :img_url
      t.integer :year
    end 
  end
end
