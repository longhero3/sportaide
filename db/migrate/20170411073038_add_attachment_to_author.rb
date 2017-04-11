class AddAttachmentToAuthor < ActiveRecord::Migration[5.0]
  def up
    add_attachment :authors, :author_image
  end

  def down
    remove_attachment :authors, :author_image
  end
end
