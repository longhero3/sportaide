class AddPreferfedUrlToLessons < ActiveRecord::Migration[5.0]
  def change
    add_column :lessons, :preferred_url, :string, default: 'https://www.youtube.com/embed/XMZYZcoAcU0', null: false
  end
end
