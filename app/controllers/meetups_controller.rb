class MeetupsController < ApplicationController

def create
    meetup = Meetup.create(meetup_params)
    meetup.user_id = session[:user_id]
    meetup.save
    render json: meetup, status: 201
end

private

def meetup_params
  params.require(:meetup).permit(:title,
                                 :description,
                                 :date,
                                 :place,
                                 :capacity) if params[:meetup]
end

end
