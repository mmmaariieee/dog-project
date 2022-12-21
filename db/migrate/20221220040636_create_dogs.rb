class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :image_url
      t.string :name
      t.string :about
      t.string :gender
      t.string :coat_length
      t.string :size
      t.string :coat_color
      t.date :date_of_birth
      t.integer :price
      t.string :location
      t.belongs_to :breed, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
