class MovieSerializer < ActiveModel::Serializer

    attributes :id, :user_id, :title, :year, :genre, :plot, :rating

    has_one :user

end
