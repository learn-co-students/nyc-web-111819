class Suggestion < ApplicationRecord
  has_many :votes
  has_many :users, through: :votes

  validates :name, :slogan, :hype_rating, presence: true
  validates :name, uniqueness: true
  validates :hype_rating, numericality: {greater_than: 0, less_than: 11} 

  validate :can_not_suggest_greg_as_mod_name


  def can_not_suggest_greg_as_mod_name
    if self.name && self.name.downcase == 'greg'
      self.errors.add(:name, 'I said no Greg')
    end 
  end

end
