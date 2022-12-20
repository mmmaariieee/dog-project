class Dog < ApplicationRecord
  belongs_to :breed
  belongs_to :user

  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews

  has_many :likes, dependent: :destroy
  has_many :users, through: :likes

  has_many :cart_dogs, dependent: :destroy
  has_many :carts, through: :cart_dogs
end

