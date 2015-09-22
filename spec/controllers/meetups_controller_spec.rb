require 'rails_helper'

RSpec.describe MeetupsController, type: :controller do
  describe "Meetups API" do
    describe "POST /meetups" do

      it "creates a meetup" do
        user = create(:user)
        sign_in user
        meetup_params = {
          "meetup" => {
             "title" => "tea-party",
             "description" => "a very nice and warm tea party",
             "date" => "12 Sept 2015",
             "place" => "nice place",
             "duration" => '3',
             "capacity" => '10'
          }
        }.to_json

        puts meetup_params

        post :create, meetup_params
        puts Meetup.last
        expect(Meetup.last.title).to eq("tea-party")
      end

      xit "returns success status after creating meetup" do

      end

    end
  end
end
