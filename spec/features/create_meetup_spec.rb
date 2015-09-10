require 'rails_helper'

RSpec.feature "User can create meetup", type: :feature do

  before do
    visit root_path
    mock_auth_hash
    click_on 'Login'
  end

  it "user can see a button 'Create Meetup'" do
    expect(page).to have_link('Create Meetup')
  end

  it "user clicks the button and is redirected to form" do
    click_on 'Create Meetup'
    expect(current_path).to eq(new_meetup_path)
  end

  it "user can see a form for new meetup" do
    click_on 'Create Meetup'
    expect(page).to have_css("form#new_meetup")
  end

  # it "clicking 'Create' meetup is saved to database" do
  #   meetup = build(:meetup)
  # end

  it "after submit user is redirected to created meetup" do
    click_on 'Create Meetup'
    fill_in :meetup_title, with: "cool meetup"
    click_on 'Create Meetup'
    expect(current_path).to eq(meetup_path([:id]))
  end
end
