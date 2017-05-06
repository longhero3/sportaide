class LessonsController < ApplicationController
  before_action :authenticate_user!

  def track_user_lesson
    course = Course.find(params[:course_id])
    lesson = Lesson.find(params[:lesson_id])
    if course && lesson
      current_user.update_progress course, lesson
    end
  end
end
