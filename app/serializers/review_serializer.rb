class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :message, :user_id, :dog_id
  has_one :dog
  has_one :user
end
