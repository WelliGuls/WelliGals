class MeetupsController < ApplicationController

  def index
    @meetups = Meetup.all
  end

  def new

  end

  def create
    @meetup = Meetup.create(meetup_params)
    redirect_to meetup_path(@meetup)

  end

  def show
    @meetup = Meetup.find(params[:id])
    render text: ''
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
