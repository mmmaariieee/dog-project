class CartDogsController < ApplicationController
    def index
        render json: CartDog.all, status: :ok
    end

    def create
        cart_dog = CartDog.create!(cart_dog_params)
        render json: cart_dog, status: :created
    end

    def destroy
        cart_dogs = Dog.find(params[:id]).cart_dogs
        cart_dogs.destroy_all
        head :no_content
    end

    private

    def cart_dog_params
        params.permit(:dog_id, :cart_id)
    end

end

