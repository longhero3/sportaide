class Course < ApplicationRecord
  has_attached_file :course_img, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :course_img, content_type: /\Aimage\/.*\z/
  validates :name, :overview, :release_date, :view, :duration, presence: true

  belongs_to :author
  has_many :chapters, inverse_of: :course, dependent: :destroy

  accepts_nested_attributes_for :chapters, allow_destroy: true

  scope :search_by_keywords, -> (term) { basic_search(term) }

  def self.searchable_columns
    [:name, :overview, :id]
  end
end
