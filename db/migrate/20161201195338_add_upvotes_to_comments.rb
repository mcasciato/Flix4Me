class AddUpvotesToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :upvotes, :integer
  end
end
