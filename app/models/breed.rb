class Breed < ApplicationRecord
    has_many :dogs, dependent: :destroy
    has_many :users, through: :dogs
end
