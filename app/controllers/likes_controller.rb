class LikesController < ApplicationController
    def index
        render json: Like.all, status: :ok
    end

    def create
        like = Like.create!(like_params)
        render json: like, status: :created
    end

    def doglikes
        dog = Dog.find(params[:id]).likes
        render json: dog, status: :ok
    end

    def doglikesdestroy
        like = Dog.find(params[:id]).likes.find(params[:likid])
        like.destroy
        head :no_content
    end

    private

    def like_params
        params.permit(:dog_id, :user_id)
    end
end
