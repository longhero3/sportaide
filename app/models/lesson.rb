class Lesson < ApplicationRecord
  has_attached_file :vod, styles: {
    :thumbnail => { :geometry => "192x108#", :format => 'png', :time => 5 } }, content_type: %w(video/mp4 video/flv video/avi video/wmv video/x-ms-wmv)
  validates_attachment_content_type :vod, content_type: %w(video/mp4 video/flv video/avi video/wmv video/x-ms-wmv)
  validates :lesson_type, inclusion: { in: ["normal", "quiz"] }
  belongs_to :chapter, inverse_of: :lessons
  delegate :course, to: :chapter, allow_nil: :true

  has_one :quiz, inverse_of: :lesson, dependent: :destroy

  accepts_nested_attributes_for :quiz, allow_destroy: true

  after_create :update_course


  rails_admin do
    create do
      field :title
      field :lesson_type, :enum do
        label 'Lesson Type'
        enum do
          ["normal", "quiz"]
        end
      end
      field :preferred_url
      field :transcript, :ck_editor
      field :quiz
    end

    edit do
      field :title
      field :lesson_type, :enum do
        label 'Lesson Type'
        enum do
          ["normal", "quiz"]
        end
      end
      field :preferred_url
      field :transcript, :ck_editor
      field :quiz
    end
  end

  def update_course
    temp_course = self.course
    temp_course.update(avg_complete_rate: 100/temp_course.lessons.count)
  end
end