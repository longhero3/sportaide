class Author < ApplicationRecord
  has_many :courses
  has_attached_file :author_image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :author_image, content_type: /\Aimage\/.*\z/
end
