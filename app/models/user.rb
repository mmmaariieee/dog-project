class User < ApplicationRecord
    has_one :cart, dependent: :destroy

    has_many :dogs, dependent: :destroy
    has_many :breeds, through: :dogs

    has_many :likes, dependent: :destroy
    has_many :dogs, through: :likes

    has_many :reviews, dependent: :destroy
    has_many :dogs, through: :reviews

    has_secure_password
end
