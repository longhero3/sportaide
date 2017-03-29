class AddCourseImgToCourses < ActiveRecord::Migration[5.0]
  def up
    add_attachment :courses, :course_img
  end

  def down
    remove_attachment :courses, :course_img
  end
end
