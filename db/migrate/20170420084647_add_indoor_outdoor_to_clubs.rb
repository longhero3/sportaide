class AddIndoorOutdoorToClubs < ActiveRecord::Migration[5.0]
  def change
    add_column :clubs, :indoor_outdoor, :string, default: "outdoor"
  end
end
