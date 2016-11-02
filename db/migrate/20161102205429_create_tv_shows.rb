class CreateTvShows < ActiveRecord::Migration[5.0]
  def change
    create_table :tv_shows do |t|
        t.integer :user_id
        t.string :title
        t.integer :year
        t.string :genre
        t.text :plot
        t.integer :rating
        
      t.timestamps
    end
  end
end
