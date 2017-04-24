class Club < ApplicationRecord
  scope :search_by_keywords, -> (term) { basic_search(term).take(50) }

  def self.searchable_columns
    [:name, :postcode, :state, :address, :business_category]
  end
end
