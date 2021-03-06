Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do 
    namespace :v1 do 
      # get 'tasks/', :to => 'tasks#index'
      post '/users/login', to: 'users#login'
      post 'tasks/new', :to => 'tasks#create'
      delete 'tasks/delete/:id', :to => 'tasks#destroy'
      patch 'tasks/complete/:id', :to => 'tasks#complete'
    end
  end
end
