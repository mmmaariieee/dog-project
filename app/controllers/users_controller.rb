class UsersController < ApplicationController

    before_action :authorize, only: [:show]
    
    def index
        render json: User.all, status: :ok
    end


    def create
        user = User.create(user_params)
        cart = Cart.create(user_id: user.id)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    private

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def user_params
        params.permit(:image_url, :first_name, :last_name, :username, :email, :phone_number, :password, :password_confirmation)
    end

end
