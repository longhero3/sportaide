class AddLikesToCourses < ActiveRecord::Migration[5.0]
  def change
    add_column :courses, :likes, :integer, default: 0
    add_column :courses, :order, :integer, default: 1
  end
end
