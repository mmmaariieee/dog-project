class User < ApplicationRecord
    has_one :cart, dependent: :destroy

    has_many :dogs, dependent: :destroy
    has_many :breeds, through: :dogs

    has_many :likes, dependent: :destroy
    has_many :dogs, through: :likes

    has_many :reviews, dependent: :destroy
    has_many :dogs, through: :reviews

    has_secure_password

    validates :image_url, presence: true
    validates :username, presence: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true
    validates :phone_number, presence: true
    # validates :password, presence: true, confirmation: true, length: { in: 6..20 }
    # validates :password_confirmation, presence: true
end
