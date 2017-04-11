class ChangeColumnTypeOfClub < ActiveRecord::Migration[5.0]
  def change
    rename_column :clubs, :type, :club_type
  end
end
