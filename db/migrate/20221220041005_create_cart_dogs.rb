class CreateCartDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_dogs do |t|
      t.belongs_to :dog, null: false, foreign_key: true
      t.belongs_to :cart, null: false, foreign_key: true

      t.timestamps
    end
  end
end
