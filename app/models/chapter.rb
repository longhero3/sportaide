class Chapter < ApplicationRecord
  belongs_to :course, inverse_of: :chapters
  has_many :lessons, inverse_of: :chapter, dependent: :destroy
  accepts_nested_attributes_for :lessons
end
