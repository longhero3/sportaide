class LessonsController < ApplicationController
  before_action :authenticate_user!

  def track_user_lesson
    @lesson = Lesson.find(params[:lesson_id])
    course = @lesson.course
    if @lesson && course
      current_user.update_progress course, @lesson
    end
  end
end
