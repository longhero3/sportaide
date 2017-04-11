class ChangeColumnOverviewOfCourse < ActiveRecord::Migration[5.0]
  def change
    change_column :courses, :overview, :text
  end
end
