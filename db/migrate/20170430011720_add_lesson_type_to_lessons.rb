class AddLessonTypeToLessons < ActiveRecord::Migration[5.0]
  def change
    add_column :lessons, :lesson_type, :string, default: "normal"
  end
end
