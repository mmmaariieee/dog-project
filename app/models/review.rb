class Review < ApplicationRecord
  belongs_to :dog
  belongs_to :user

  validates :message, presence: true, length: { in: 10..200 }
end
