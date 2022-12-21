class DogsController < ApplicationController
    def index
        render json: Dog.all, status: :ok
    end
end
