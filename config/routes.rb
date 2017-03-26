Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  resources :sports do
    collection do
      get :search_sports
    end
  end

  get 'dashboard' => 'dashboard#index'
  get 'dashboard/*path' => 'dashboard#index'
end
