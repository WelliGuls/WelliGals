class MeetupsController < ApplicationController

  def index
    @meetups = Meetup.all
    @users = User.all
  end

  def new

  end

  def create
    @meetup = Meetup.create(meetup_params)
    @meetup.user_id = session[:user_id]
    @meetup.save
    redirect_to meetup_path(@meetup)

  end

  def show
    @meetup = Meetup.find(params[:id])
    @user = User.find(session[:user_id])
  end

  private
  def meetup_params
    params.require(:meetup).permit( :title,
                                    :description,
                                    :user_id,
                                    :place,
                                    :date,
                                    :capacity,
                                    :going)
  end
end
