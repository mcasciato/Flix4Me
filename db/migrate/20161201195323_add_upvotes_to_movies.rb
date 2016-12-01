class AddUpvotesToMovies < ActiveRecord::Migration[5.0]
  def change
    add_column :movies, :upvotes, :integer
  end
end
