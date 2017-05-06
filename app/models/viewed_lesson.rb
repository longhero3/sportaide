class ViewedLesson < ApplicationRecord
  belongs_to :user
  belongs_to :lesson
end
