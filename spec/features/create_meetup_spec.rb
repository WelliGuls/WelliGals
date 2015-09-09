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

  it "user clicks the button and is redirected to form"

  it "clicking 'Create' meetup is saved to database"

  it "after submit user is redirected to created meetup"
end
