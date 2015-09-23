class JsAppsController < ApplicationController
before_action :set_auth

def dashboard
  render file: '/public/dashboard', layout: false
end
  private

    def set_auth
      @auth = session[:omniauth] if session[:omniauth]
    end
end
