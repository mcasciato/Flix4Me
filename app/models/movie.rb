class Movie < ApplicationRecord
    belongs_to :user
    has_many :comments
    has_attached_file :image
    validates_attachment_content_type :iamge, content_type: /\Aimage\/.*\z/


    def as_json(options = {})
		super(options.merge(include: [:user, comments: {include: :user}] ))
	end
end
