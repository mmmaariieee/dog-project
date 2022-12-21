class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :message
  has_one :dog
  has_one :user
end
