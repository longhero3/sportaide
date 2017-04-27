class Lesson < ApplicationRecord
  has_attached_file :vod, styles: {
    :thumbnail => { :geometry => "192x108#", :format => 'png', :time => 5 } }, content_type: %w(video/mp4 video/flv video/avi video/wmv video/x-ms-wmv)
  validates_attachment_content_type :vod, content_type: %w(video/mp4 video/flv video/avi video/wmv video/x-ms-wmv)
  belongs_to :chapter, inverse_of: :lessons

  rails_admin do
    create do
      field :title
      field :preferred_url
      field :transcript, :ck_editor
    end

    edit do
      field :title
      field :preferred_url
      field :transcript, :ck_editor
    end
  end
end