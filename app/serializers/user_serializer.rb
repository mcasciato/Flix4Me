class UserSerializer < ActiveModel::Serializer

    attributes :id, :username, :email

    has_many :tv_shows
    has_many :movies

end
