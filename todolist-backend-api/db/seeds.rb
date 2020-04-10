# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name: 'Mason')
Task.create(user_id: 1, completed: false, time: "8:00 am", text: "breakfast time")
Task.create(user_id: 1, completed: true, time: "9:30 am", text: "gym time")
Task.create(user_id: 1, completed: false, time: "11:00 pm", text: "bed time")