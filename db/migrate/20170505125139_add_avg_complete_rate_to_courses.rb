class AddAvgCompleteRateToCourses < ActiveRecord::Migration[5.0]
  def change
    add_column :courses, :avg_complete_rate, :integer, default: 0
  end
end
