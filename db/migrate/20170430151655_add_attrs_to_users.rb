class AddAttrsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :dob, :datetime
    add_column :users, :gender, :string, default: 'Male'
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string
  end
end
