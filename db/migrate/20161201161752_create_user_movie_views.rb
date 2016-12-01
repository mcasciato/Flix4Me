class CreateUserMovieViews < ActiveRecord::Migration[5.0]
  def change
    create_table :user_movie_views do |t|
      t.references :movie, foreign_key: true
      t.references :user, foreign_key: true
    end
  end
end
