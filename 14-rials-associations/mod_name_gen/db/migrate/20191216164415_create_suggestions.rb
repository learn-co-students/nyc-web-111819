class CreateSuggestions < ActiveRecord::Migration[5.2]
  def change
    create_table :suggestions do |t|
      t.string :name
      t.string :slogan
      t.string :img_url

      t.timestamps
    end
  end
end
