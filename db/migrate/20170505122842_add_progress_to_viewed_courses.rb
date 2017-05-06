class AddProgressToViewedCourses < ActiveRecord::Migration[5.0]
  def change
    add_column :viewed_courses, :progress, :integer, default: 0
  end
end
