class Sport < ApplicationRecord
  scope :search_by_title, -> (term) { basic_search(term).take(3) }

  def self.searchable_columns
    [:name, :description, :id]
  end
end
