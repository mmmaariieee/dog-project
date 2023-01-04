class ReviewsController < ApplicationController
    def index
        render json: Review.all, status: :ok
    end

    def show
        review = find_review
        render json: review, status: :ok
    end

    
    def update
        review = find_review
        review.update!(review_params)
        render json: review, status: :accepted
    end
    
    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end
    
    def destroy
        review = find_review
        review.destroy
        head :no_content
    end
    
    def dogreviews
        dog = Dog.find(params[:id]).reviews
        render json: dog, status: :ok
    end

    def dogreviewsdestroy
        review = Dog.find(params[:id]).reviews.find(params[:revid])
        review.destroy
        head :no_content
    end

    private

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:message, :dog_id, :user_id)
    end
end
