Rails.application.routes.draw do
root 'meetups#index'

get 'home/profile' => 'home#profile'

get 'auth/:provider/callback', to:'sessions#create'

delete 'sign_out', to: "sessions#destroy", as: 'sign_out'

resources :meetups

end
