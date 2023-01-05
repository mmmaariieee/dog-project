class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_responce
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_responce

  def render_not_found_responce(exception)
    render json: {error: "#{exception.model} not found"}, status: :not_found
  end

  def render_invalid_responce(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end

end
