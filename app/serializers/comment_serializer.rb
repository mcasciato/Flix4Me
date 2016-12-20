class CommentSerializer < ActiveModel::Serializer

    attributes :id, :content, :movie_id, :user_id, :upvotes

    has_one :movie

end
