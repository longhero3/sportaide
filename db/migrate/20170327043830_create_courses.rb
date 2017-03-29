class CreateCourses < ActiveRecord::Migration[5.0]
  def change
    create_table :courses do |t|
      t.string :name, null: false
      t.string :overview, null: false
      t.datetime :release_date, default: DateTime.now
      t.integer :duration, default: 0
      t.integer :view, default: 0
      t.timestamps
    end
  end
end
