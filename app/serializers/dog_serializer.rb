class DogSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :name, :about, :gender, :coat_length, :size, :coat_color, :date_of_birth, :price, :location

  def location
    "#{self.object.city}, #{self.object.state}"
  end

end