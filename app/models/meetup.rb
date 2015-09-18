class Meetup < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  # has_many :authors, through: :comment, source: :meetup
end
