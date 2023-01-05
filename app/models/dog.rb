class Dog < ApplicationRecord
  belongs_to :breed
  belongs_to :user

  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews

  has_many :likes, dependent: :destroy
  has_many :users, through: :likes

  has_many :cart_dogs, dependent: :destroy
  has_many :carts, through: :cart_dogs

  validates :image_url, presence: true
  validates :name, presence: true, uniqueness: true
  validates :about, presence: true, length: { in: 10..200 }
  validates :gender, presence: true
  # validates :coat_length, presence: true
  # validates :size, presence: true
  # validates :coat_color, presence: true
  # validates :date_of_birth, presence: true
  validates :price, presence: true, numericality: true
  # validates :city, presence: true
  # validates :state, presence: true
  
end

