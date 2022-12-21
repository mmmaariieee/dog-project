class LikesController < ApplicationController
    def index
        render json: Like.all, status: :ok
    end
end
