# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.create(user_id: 1, title: 'Star Wars: Episode IV - A New Hope', year: 1977, genre: 'Science Fiction', plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.", rating: 10)
Movie.create(user_id: 1, title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980, genre: 'Science Fiction', plot: "After the rebels have been brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.", rating: 10)
Movie.create(user_id: 1, title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983, genre: 'Science Fiction', plot: "After rescuing Han Solo from the palace of Jabba the Hutt, the rebels attempt to destroy the second Death Star, while Luke struggles to make Vader return from the dark side of the Force.", rating: 10)
Movie.create(user_id: 1, title: 'Star Wars: Episode VII - The Force Awakens', year: 2015, genre: 'Science Fiction', plot: "Three decades after the defeat of the Galactic Empire, a new threat arises. The First Order attempts to rule the galaxy and only a ragtag group of heroes can stop them, along with the help of the Resistance.", rating: 10)

TvShow.create(user_id: 1, title: 'Timeless', year: 2016, genre: 'Action & Adventure', plot: "An unlikely trio traveling through time to battle unknown criminals in order to protect history as we know it.", rating: 8)
TvShow.create(user_id: 1, title: 'Arrow', year: 2012, genre: 'Action & Adventure', plot: "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.", rating: 10)
TvShow.create(user_id: 1, title: 'The Flash', year: 2014, genre: 'Action & Adventure', plot: "After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming a superhero, The Flash, fighting crime in Central City.", rating: 10)
TvShow.create(user_id: 1, title: 'Stranger Things', year: 2016, genre: 'Science Fiction', plot: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.", rating: 10)
