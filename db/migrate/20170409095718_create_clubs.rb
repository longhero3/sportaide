class CreateClubs < ActiveRecord::Migration[5.0]
  def change
    create_table :clubs do |t|
      t.string :name
      t.string :description
      t.string :address
      t.string :suburb
      t.string :postcode
      t.string :state
      t.string :business_category
      t.string :lga
      t.string :region

      t.timestamps
    end
  end
end
