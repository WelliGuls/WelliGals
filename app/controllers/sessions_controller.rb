class SessionsController < ApplicationController

  def new
    redirect_to '/auth/facebook'
  end

  def create
    # auth = request.env["omniauth.auth"]
    # session[:omniauth] = auth
    # user = User.sign_in_from_omniauth(auth)
    user= User.find_or_create_from_omniauth(request.env['omniauth.auth'])
    session[:user_id] = user.id
    redirect_to root_url
  end

  def destroy
    reset_session
    redirect_to root_url
  end
end
