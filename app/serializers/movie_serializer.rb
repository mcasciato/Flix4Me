class MovieSerializer < ActiveModel::Serializer

    attributes :id, :user_id, :title, :year, :genre, :plot, :rating, :upvotes

    has_one :user
    has_many :comments

end
