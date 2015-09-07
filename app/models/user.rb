class User < ActiveRecord::Base
#   def self.sign_in_from_omniauth(auth)
#     find_by(provider: auth['provider'], uid: auth['uid']) || create_user_from_omniauth(auth)
#   end

#   def self.create_user_from_omniauth(auth)
#     create(
#       provider: auth['provider'],
#       uid: auth['uid'],
#       name: auth['info']['name'],
#       )
#   end
# end

  def self.find_or_create_from_omniauth(auth)
    user = User.where({:uid => auth[:uid], :provider => auth[:provider]}).first_or_create

    info = auth['extra']['raw_info']
    user.uid = auth['uid']
    user.provider = auth['provider']
    user.name = info["name"]
    # user.github_token = auth["credentials"]["token"]

    user.save if user.changed?
    user
  end
end
