class UserSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :first_name, :last_name, :username, :email, :phone_number

  has_many :likes
  has_many :reviews
  has_one :cart
end
