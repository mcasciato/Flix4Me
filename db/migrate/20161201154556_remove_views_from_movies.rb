class RemoveViewsFromMovies < ActiveRecord::Migration[5.0]
  def change
      remove_column :movies, :views
  end
end
