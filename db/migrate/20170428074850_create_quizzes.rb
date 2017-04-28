class CreateQuizzes < ActiveRecord::Migration[5.0]
  def change
    create_table :quizzes do |t|
      t.references :lesson, foreign_key: true
      t.text :content

      t.timestamps
    end
  end
end
