class UserSerializer < ActiveModel::Serializer

    attributes :id, :username, :email

    has_many :movies
    has_many :comments

end
