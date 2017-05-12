class CoursesController < ApplicationController
  before_action :authenticate_user!

  def index
    @courses = Course.all
  end

  def show
    @course = Course.find(params[:id])
    @lesson_ids = []
    if @course
      current_user.initialise_viewed_course @course
      @lesson_ids = current_user.viewed_lessons.where(completed: true, lesson: @course.lessons.pluck(:id)).pluck(:lesson_id)
    end
  end

  def top_viewed_courses
    @top_courses = current_user.viewed_courses.order(updated_at: :desc)
  end

  def search_courses
    @keywords = params[:text]
    if @keywords && !@keywords.blank?
      @courses = Course.search_by_keywords(params[:text])
    else
      @courses = Course.all
    end
  end

  def search_courses_main
    @keywords = params[:term]
    if @keywords && !@keywords.blank?
      @courses = Course.search_by_keywords(params[:term])
    else
      @courses = Course.all
    end
  end
end
