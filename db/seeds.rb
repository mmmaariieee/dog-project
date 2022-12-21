# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Clearing db..."
Breed.destroy_all
Dog.destroy_all
User.destroy_all
Cart.destroy_all
Review.destroy_all
Like.destroy_all
CartDog.destroy_all

Faker::UniqueGenerator.clear




puts "Seeding breeds..."
10.times {Breed.create(name: Faker::Creature::Dog.unique.breed)}

puts "Seeding users..."
10.times {User.create(first_name: Faker::Name.first_name,
                      last_name: Faker::Name.last_name,
                      username: Faker::Internet.username,
                      email: Faker::Internet.free_email,
                      phone_number: Faker::PhoneNumber.cell_phone,
                      password_digest: Faker::Internet.password)}

puts "Seeding dogs..."
30.times {Dog.create(name: Faker::Creature::Dog.unique.name,
                     about: Faker::Creature::Dog.meme_phrase,
                     gender: Faker::Creature::Dog.gender,
                     coat_length: Faker::Creature::Dog.coat_length,
                     size: Faker::Creature::Dog.size,
                     coat_color: Faker::Color.color_name,
                     date_of_birth: Faker::Date.between(from: '2012-09-23', to: '2022-12-25'),
                     price: rand(1...100).to_s + '00',
                     city: Faker::Address.city,
                     state: Faker::Address.state,
                     breed: Breed.all.sample,
                     user: User.all.sample)}

puts "Adding carts to users ..."
User.all.each do |u|
    Cart.create(user: u)
end

puts "Seeding likes..."
100.times {Like.create(dog: Dog.all.sample,
                      user: User.all.sample)}

puts "Seeding cart_dogs..."
20.times {CartDog.create(dog: Dog.all.sample,
                          cart: Cart.all.sample)}

puts "Seeding reviews..."
50.times {Review.create(message: Faker::Lorem.sentence,
                        dog: Dog.all.sample,
                        user: User.all.sample)}

# puts "Seeding ..."
# 20.times {.create()}





puts "Done seeding!"