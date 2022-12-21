class LikeSerializer < ActiveModel::Serializer
  attributes :id
  has_one :dog
  has_one :user
end
