class CreateViewedLessons < ActiveRecord::Migration[5.0]
  def change
    create_table :viewed_lessons do |t|
      t.references :user, foreign_key: true
      t.references :lesson, foreign_key: true
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
