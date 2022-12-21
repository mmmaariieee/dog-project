class CartDogsController < ApplicationController
    def index
        render json: CartDog.all, status: :ok
    end
end
