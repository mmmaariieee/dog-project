class DogsController < ApplicationController
    def index
        render json: Dog.all, status: :ok
    end

    def show
        dog = find_dog
        render json: dog, status: :ok
    end

    def update
        dog = find_dog
        dog.update!(dog_params)
        render json: dog, status: :accepted
    end

    def create
        dog = Dog.create!(dog_params)
        render json: dog, status: :created
    end

    def destroy
        dog = find_dog
        dog.destroy
        head :no_content
    end

    private

    def find_dog
        Dog.find(params[:id])
    end

    def dog_params
        params.permit(:image_url, :name, :about, :gender, :coat_length, :size, :coat_color, :date_of_birth, :price, :location)
    end
end
