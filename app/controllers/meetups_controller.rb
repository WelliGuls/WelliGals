class HomeController < ApplicationController

def create
  current_user.meetups.create(meetup_params)
end

private

def meetup_params
  params.require(:meetup).permit(:title,
                                 :description,
                                 :date,
                                 :place,
                                 :capacity)
end

end
