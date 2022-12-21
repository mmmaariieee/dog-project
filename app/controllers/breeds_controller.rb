class BreedsController < ApplicationController
    def index
        render json: Breed.all, status: :ok
    end
end
