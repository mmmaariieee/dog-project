class CartDogSerializer < ActiveModel::Serializer
  attributes :id
  has_one :cart
  has_one :dog
end
