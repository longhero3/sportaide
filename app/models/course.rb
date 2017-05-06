class Course < ApplicationRecord
  has_attached_file :course_img, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :course_img, content_type: /\Aimage\/.*\z/
  validates :name, :overview, :release_date, :view, :duration, presence: true

  belongs_to :author
  has_many :chapters, inverse_of: :course, dependent: :destroy
  has_many :lessons, through: :chapters

  accepts_nested_attributes_for :chapters, allow_destroy: true

  scope :search_by_keywords, -> (term) { basic_search(term) }

  def self.searchable_columns
    [:name, :overview, :id]
  end

  def self.recalculate_avg_complete_rate
    self.all.each do |course|
      if course.lessons.count > 0
        course.update(avg_complete_rate: 100 / course.lessons.count)
      end
    end
  end
end
