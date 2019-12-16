class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.belongs_to :user, foreign_key: true
      t.references :suggestion, foreign_key: true

      t.timestamps
    end
  end
end
