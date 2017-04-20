Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  resources :sports do
    collection do
      get :search_sports
    end
  end

  resources :courses, only: [:index, :show] do
    collection do
      get :search_courses
      get :search_courses_main
    end
  end

  resources :clubs, only: [:index, :show] do
    collection do
      get :search_clubs
    end
  end

  get 'dashboard' => 'dashboard#index'
  get 'weather' => 'weather#index'
  get 'dashboard/*path' => 'dashboard#index'
end
