class Meetup < ActiveRecord::Base
  belongs_to :user

  validates :title, presense: true, length: { in: 5..20 }
  validates :description, presense: true, length: { maximum: 250 }
  validates :date, :place, presense: true
  validates :capacity, presense: true, numericality: { only_integer: true, greater_than: 0 }



end
