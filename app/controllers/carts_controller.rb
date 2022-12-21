class CartsController < ApplicationController
    def index
        render json: Cart.all, status: :ok
    end
end
