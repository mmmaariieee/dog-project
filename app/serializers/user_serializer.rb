class UserSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :first_name, :last_name, :username, :email, :phone_number, :password_digest
end
