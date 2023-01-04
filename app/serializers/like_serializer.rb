class LikeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :dog_id
  has_one :dog
  has_one :user
end
