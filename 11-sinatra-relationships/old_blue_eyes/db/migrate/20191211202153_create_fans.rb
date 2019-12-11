class CreateFans < ActiveRecord::Migration
  def change
    create_table :fans do |t|
      t.string :name 
      t.string :img_url 
      t.integer :achievement_id
    end 
  end
end
