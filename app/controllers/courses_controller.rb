class CoursesController < ApplicationController
  before_action :authenticate_user!

  def index
    @courses = Course.all
  end

  def show
    @course = Course.find(params[:id])
    if @course
      current_user.initialise_viewed_course @course
    end
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
