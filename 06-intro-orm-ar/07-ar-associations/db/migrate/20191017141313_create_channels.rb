class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    # create channels table
    create_table :channels do |t|
      t.string :topic
      t.string :name
    end
  end
end
