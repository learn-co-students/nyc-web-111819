class User < ApplicationRecord
  has_many :votes 
  has_many :suggestions, through: :votes
end
