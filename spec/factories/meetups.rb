FactoryGirl.define do
  factory :meetup do
    title Faker::Lorem.words(2)
    description Faker::Lorem.paragraph(2)
    date "2015-09-22 15:09:28"
    place Faker::Lorem.word
    duration 3
    capacity 10
    user_id 1
  end

end
