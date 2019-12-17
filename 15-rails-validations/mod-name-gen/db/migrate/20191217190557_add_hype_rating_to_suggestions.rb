class AddHypeRatingToSuggestions < ActiveRecord::Migration[5.2]
  def change
    add_column :suggestions, :hype_rating, :integer
  end
end
