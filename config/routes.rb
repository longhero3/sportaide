Rails.application.routes.draw do
  devise_for :admins, controllers: { sessions: 'admins/sessions'}
  devise_for :users, controllers: { sessions: 'users/sessions' }
  mount Ckeditor::Engine => '/ckeditor'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
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
  get 'weather/search_weather' => 'weather#search_weather'
  get 'dashboard/*path' => 'dashboard#index'
end
