Rails.application.config.middleware.use OmniAuth::Builder do
  puts "key", ENV['FACEBOOK_KEY']
  puts "secret"
  provider :facebook, ENV['FACEBOOK_KEY'],  ENV['FACEBOOK_SECRET']

end
