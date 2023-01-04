Rails.application.routes.draw do

  post '/signup', to: "users#create"
  get '/me', to: "users#show"

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  get "/dogs/:id/reviews", to: "reviews#dogreviews"
  delete "/dogs/:id/reviews/:revid", to: "reviews#dogreviewsdestroy"

  resources :dogs
  resources :users, only: :index
  resources :carts, only: :index
  resources :breeds, only: :index
  resources :likes, only: :index
  resources :reviews
  resources :cart_dogs, only: :index
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
