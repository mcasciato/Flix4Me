class CommentSerializer < ActiveModel::Serializer

    attributes :id, :content, :movie_id

    has_one :movie

end
