class CoursesController < ApplicationController

  def index
    @courses = Course.all
  end

  def show
    @course = Course.find(params[:id])
  end

  def search_courses
    @courses = Course.search_by_keywords(params[:text])
  end
end
