class User < ActiveRecord::Base
  has_many :messages
  has_many :channels, through: :messages
    # has many through requires two things to work.
    # 1. the connection to the join models has to have alrady been set up.
    # 2. the join models needs to have the belongs to set up.

  # def messages
  #   Message.all.select do |message|
  #     message.user_id == self.id
  #   end
  # end
end