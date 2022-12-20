# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_12_20_041005) do

  create_table "breeds", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "cart_dogs", force: :cascade do |t|
    t.integer "dog_id", null: false
    t.integer "cart_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cart_id"], name: "index_cart_dogs_on_cart_id"
    t.index ["dog_id"], name: "index_cart_dogs_on_dog_id"
  end

  create_table "carts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_carts_on_user_id"
  end

  create_table "dogs", force: :cascade do |t|
    t.string "name"
    t.string "about"
    t.date "date_of_birth"
    t.integer "price"
    t.string "location"
    t.integer "breed_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["breed_id"], name: "index_dogs_on_breed_id"
    t.index ["user_id"], name: "index_dogs_on_user_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "dog_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dog_id"], name: "index_likes_on_dog_id"
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "message"
    t.integer "dog_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dog_id"], name: "index_reviews_on_dog_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "image_url"
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "cart_dogs", "carts"
  add_foreign_key "cart_dogs", "dogs"
  add_foreign_key "carts", "users"
  add_foreign_key "dogs", "breeds"
  add_foreign_key "dogs", "users"
  add_foreign_key "likes", "dogs"
  add_foreign_key "likes", "users"
  add_foreign_key "reviews", "dogs"
  add_foreign_key "reviews", "users"
end
