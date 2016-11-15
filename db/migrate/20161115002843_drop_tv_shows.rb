class DropTvShows < ActiveRecord::Migration[5.0]
  def change
      drop_table :tv_shows
  end
end
