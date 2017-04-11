class AddAttToClub < ActiveRecord::Migration[5.0]
  def change
    add_column :clubs, :lng, :decimal, default: 0.0
    add_column :clubs, :lat, :decimal, default: 0.0
  end
end
