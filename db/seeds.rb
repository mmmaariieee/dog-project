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


profile_pictures = [
    "https://sb.kaleidousercontent.com/67418/1672x1018/6463a5af0d/screenshot-2022-05-24-at-15-22-28.png",
    "https://0.soompi.io/wp-content/uploads/2022/10/28014617/Kim-Ji-Won-Profile6.jpeg",
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?size=338&ext=jpg",
    "https://media.istockphoto.com/id/1311977362/photo/mid-age-chinese-ethnicity-man-in-the-park.jpg?b=1&s=170667a&w=0&k=20&c=IwjreC97fK2oMl0TPIo2JfgcapES_9lZ-uCRgmcMt9s=",
    "https://sb.kaleidousercontent.com/67418/1920x1282/9d56e09251/christina-wocintechchat-com-50tkcap8m3a-unsplash.jpg",
    "https://www.phdmedia.com/romania/wp-content/uploads/sites/73/2015/05/temp-people-profile.jpg",
    "https://media.istockphoto.com/id/1162358018/photo/young-brazilian-man-wearing-blue-t-shirt-standing-over-isolated-white-background-happy-face.jpg?s=612x612&w=0&k=20&c=lS6ZMbphJwdQZVQHf_CjySMQRNXL5wY6YrU5n0xgaF8=",
    "https://media.istockphoto.com/id/1336471714/photo/portrait-of-young-pretty-girl-with-long-hair-dark-eyes-and-skin-white-t-shirt-medal-necklace.jpg?b=1&s=170667a&w=0&k=20&c=4Sm-7zUkxVfRArgABw2Gg8AiNXJZ-paFX6Lkqu9nIE0=",
    "https://www.vera.org/images/headshots/_800x800_crop_center-center_82_none/Melvin-Washington-V2_200309_203156.jpg?mtime=1646883304"
]

dog_pictures = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*",
    "https://media.cnn.com/api/v1/images/stellar/prod/201030094143-stock-rhodesian-ridgeback.jpg?q=w_2187,h_1458,x_0,y_0,c_fill",
    "https://th-thumbnailer.cdn-si-edu.com/SdKYWifCKfE2g8O-po_SO99hQ-Y=/1000x750/filters:no_upscale():focal(3126x2084:3127x2085)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/ec/e6/ece69181-708a-496e-b2b7-eaf7078b99e0/gettyimages-1310156391.jpg",
    "https://cdn.britannica.com/44/233844-050-A0F9F39C/French-bulldog.jpg",
    "https://media.cnn.com/api/v1/images/stellar/prod/220818142713-dogs-tears-emotions-wellness-stock.jpg?c=original",
    "https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg",
    "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg",
    "https://www.akc.org/wp-content/uploads/2017/11/French-Bulldog-standing-outdoors.jpg",
    "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
    "https://www.helpguide.org/wp-content/uploads/king-charles-spaniel-resting-head.jpg",
    "https://assets.technologynetworks.com/production/dynamic/images/content/361072/dog-breed-is-not-an-accurate-way-to-predict-behavior-361072-960x540.jpg?cb=11742263",
    "https://www.ellevetsciences.com/wp-content/uploads/2022/04/EV_BLOG_FrenchBullDogs_Header.jpg",
    "https://cf.ltkcdn.net/dogs/dog-breeds/images/orig/322772-1600x1066-miniature-poodle-guide.jpg",
    "https://www.thesprucepets.com/thmb/G2b1Md8eDekCvrJMVClc3anFe88=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ToyFoxTerrierGettyImages-1178180163SergeyRyumin-8b8cb34a6406454185ddeea97b8a0c45.jpg",
    "https://media-be.chewy.com/wp-content/uploads/2021/06/03165025/Bedlington-Terrier-FeaturedImage.jpg",
    "https://dogtime.com/assets/uploads/gallery/french-bulldog-dog-breed-pictures/7-silverbrown.jpg",
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/24134701/Standard-Poodle-standing-outdoors-at-the-beach.jpg",
    "https://media-be.chewy.com/wp-content/uploads/2021/05/27134335/Dalmatian_FeaturedImage.jpg",
    "https://a-z-animals.com/media/2022/05/Rough-Collie-in-the-snow.jpg",
    "https://bulldogtime.com/wp-content/uploads/2022/08/blue-french-bulldog-2.jpg",
    "https://highlandcanine.com/wp-content/uploads/2021/05/yorkshire-terrier-sitting-on-decking.jpg",
    "https://cdn.britannica.com/77/235277-050-E9162647/white-bull-terrier-dog.jpg",
    "https://cdn.britannica.com/15/236915-050-055930EB/West-Highland-white-terrier-dog.jpg",
    "https://www.newdoggy.com/wp-content/uploads/2022/10/Jambo-male-french-bulldog-puppy-for-sale03.jpg",
    "https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2022/11/Boston-Terrier-Dog-Breed-Feature-Image.jpg",
    "https://cdn.shopify.com/s/files/1/2715/7980/articles/Dalmatian-running-on-water_1d3630a9-55aa-4455-af30-14bf99798a9b_1600x.jpg?v=1648204882",
    "https://a-z-animals.com/media/Poodle-Canis-familiaris-white.jpg",
    "https://www.animalkingdomaz.com/wp-content/uploads/dalmatian-adult.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beautiful-australian-shepherd-walking-royalty-free-image-168814214-1565190235.jpg",
    "https://www.thesprucepets.com/thmb/G0MGCtP9uMt7AtPHWcirnm38T5w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1153019783-212f3a30f2874e01b82582f65010d569.jpg"
]

puts "Seeding breeds..."
10.times {Breed.create(name: Faker::Creature::Dog.unique.breed)}

puts "Seeding users..."

for each in profile_pictures do
    User.create(first_name: Faker::Name.first_name,
                last_name: Faker::Name.last_name,
                image_url: each,
                username: Faker::Internet.username,
                email: Faker::Internet.free_email,
                phone_number: Faker::PhoneNumber.cell_phone,
                password_digest: Faker::Internet.password)
end

# 10.times {User.create(first_name: Faker::Name.first_name,
#                       last_name: Faker::Name.last_name,
#                       username: Faker::Internet.username,
#                       email: Faker::Internet.free_email,
#                       phone_number: Faker::PhoneNumber.cell_phone,
#                       password_digest: Faker::Internet.password)}

puts "Seeding dogs..."

dog_pictures.each do |picture|
    Dog.create(name: Faker::Creature::Dog.unique.name,
            image_url: picture,
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
            user: User.all.sample)
end

# 30.times {Dog.create(name: Faker::Creature::Dog.unique.name,
#                      about: Faker::Creature::Dog.meme_phrase,
#                      gender: Faker::Creature::Dog.gender,
#                      coat_length: Faker::Creature::Dog.coat_length,
#                      size: Faker::Creature::Dog.size,
#                      coat_color: Faker::Color.color_name,
#                      date_of_birth: Faker::Date.between(from: '2012-09-23', to: '2022-12-25'),
#                      price: rand(1...100).to_s + '00',
#                      city: Faker::Address.city,
#                      state: Faker::Address.state,
#                      breed: Breed.all.sample,
#                      user: User.all.sample)}

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