# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Suggestion.destroy_all
User.destroy_all
Vote.destroy_all

Suggestion.create(name: 'Rails is so exciting', slogan: 'Freakin Amped on the Rails', img_url: "https://images.unsplash.com/photo-1540804236945-b6ae24bfe0a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", hype_rating: rand(1..10))
Suggestion.create(name: 'Marty McPry', slogan: "where we're going we don't need roads...beacuse we have Rails", img_url: "https://www.usajacket.com/wp-content/uploads/2016/11/Back-To-The-Future-Marty-Mcfly-Vest.jpg", hype_rating: rand(1..10))
Suggestion.create(name: 'Git Reps', slogan: "Tony's work out plan", img_url: "https://cdn2.vectorstock.com/i/1000x1000/55/61/brawny-brain-with-muscles-lifting-weights-vector-5865561.jpg", hype_rating: rand(1..10))
Suggestion.create(name: '111819', slogan: 'Wanna be a mechine gotta talk like a mechine', img_url: "https://cdn.thinglink.me/api/image/792172321598078976/1240/10/scaletowidth", hype_rating: rand(1..10))
Suggestion.create(name: 'Array of the Warrior', slogan: 'Learn today so that you may live tomorrow', img_url: "https://images-na.ssl-images-amazon.com/images/I/41T1JaWMyxL._SX356_BO1,204,203,200_.jpg", hype_rating: rand(1..10))
Suggestion.create(name: 'localhoast:3000', slogan: "I've been to the year 3000
  Not much has changed, but they lived underwater", img_url: "https://img.ohmymag.com/article/480/architecture/neom-le-projet-du-prince-d-arabie-saoudite-a-neom-il-y-aura-plus-de-robots-que-d-humains-le-budget-pour-construire-cette-ville-dans-le-futur-500-milliards-de-dollars-livraison-prevue-en-2030_97c8081822a4514efa94f586bf37011f72dcd193.jpg", hype_rating: rand(1..10))
Suggestion.create(name: 'Friday the 13th', slogan: "dark times", img_url: "https://i.pinimg.com/originals/af/75/ff/af75ff456977c7fb36f44f87d3fa9c40.jpg", hype_rating: rand(1..10))








users = [
  {name: "Alex Williams", img_url: "https://ca.slack-edge.com/T02MD9XTF-UQ32T8ZGA-1d8b246a8aff-512"},
  {name: "Chaim Muskal", img_url: "https://ca.slack-edge.com/T02MD9XTF-UPP8J2MN3-ccf426a8d5d4-512"},
  {name: "Edward Castillo", img_url: "https://ca.slack-edge.com/T02MD9XTF-UMU3AK9R9-8066056b3b11-512"},
  {name: "James Schaffer", img_url: "https://ca.slack-edge.com/T02MD9XTF-UQJ2R94EA-0d4d26671dd9-512"},
  {name: "Kevin Kim", img_url: "https://ca.slack-edge.com/T02MD9XTF-UPMCZ4DA9-97cc68f2f97d-512"},
  {name: "Maddy Corman", img_url: "https://ca.slack-edge.com/T02MD9XTF-UQ32TAFUJ-8dc8eda88489-512"},
  {name: "Saman Batool", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNZCW6XHV-887f56cd0ca9-512"},
  {name: "Sean Eriksen", img_url: "https://ca.slack-edge.com/T02MD9XTF-UPPJWDG4E-c9644a435aff-512"},
  {name: "Shakil Abdin", img_url: "https://ca.slack-edge.com/T02MD9XTF-UQHMQV2DV-c23ee99edefc-512"},
  {name: "Warren McDonald", img_url: "https://ca.slack-edge.com/T02MD9XTF-UPTP51RM3-g93b064f561f-512"},
  {name: "Sean Tarzy", img_url: "https://ca.slack-edge.com/T02MD9XTF-UQ32TB4US-ba9634a47840-512"}, 
  {name: "Natalie Galligan", img_url: "https://ca.slack-edge.com/T02MD9XTF-UQJ349T2A-16c4deb69778-512"}, 
  {name: "Anna Carey", img_url: "https://ca.slack-edge.com/T02MD9XTF-UQFSLJFCM-892339ac26ce-512"}, 
  {name: "Tim Rines", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNX1T44NQ-347b781241f1-512"}, 
  {name: "Matthew Masiello", img_url: "https://ca.slack-edge.com/T02MD9XTF-UFLH3KMEV-361ad28cf909-512"}, 
  {name: "Gabbie Piraino", img_url: "https://ca.slack-edge.com/T02MD9XTF-UEACERAQZ-a4abcb7c233f-512"},
  {name: "Alex Schelchere", img_url: "https://ca.slack-edge.com/T02MD9XTF-UK8BFUYUW-a03c9cbb43c8-512"},
  {name: "Tony Lam", img_url: "https://ca.slack-edge.com/T02MD9XTF-UBQUNRJ1X-3293df56e47d-512"},
  {name: "Brinda Behal", img_url: "https://ca.slack-edge.com/T02MD9XTF-UN7P9H2AJ-0baa66f54cd2-512"},
]

users.each do |user|
  User.create(user)
end 




20.times do 
  Vote.create(user: User.all.sample, suggestion_id: Suggestion.all.sample.id)
end
