class CartDog < ApplicationRecord
  belongs_to :dog
  belongs_to :cart
end
