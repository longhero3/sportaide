class Club < ApplicationRecord
  scope :search_by_keywords, -> (term) { basic_search(term) }

  def self.searchable_columns
    [:name, :postcode, :state]
  end
end
