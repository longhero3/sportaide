class AddTypeToClubs < ActiveRecord::Migration[5.0]
  def change
    add_column :clubs, :type, :integer, default: 1
  end
end
