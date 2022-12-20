class Cart < ApplicationRecord
  belongs_to :user

  has_many :cart_dogs, dependent: :destroy
  has_many :dogs, through: :cart_dogs
end
