class CommentSerializer < ActiveModel::Serializer

    attributes :id, :content, :move_id

    has_one :movie

end
