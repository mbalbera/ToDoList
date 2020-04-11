# To Do List

This is a React Native - Ruby on Rails project built for the matter project studio code challenge.

## Set up

1. Fork Repo
2. In one terminal: Navigate into the `todolist-backend-api`
    1. run `bundle install` to make sure gems are up to date
    2. run `rails db:reset` to create and seed the database
    3. run `rails s` to start the backend server on `http://localhost:3000/`
3. In another terminal: Navigate into the `todolist-frontend`
   1. run `yarn install && yarn start`
   2. Type the letter `i` to open ios simulator
4. Log in as `Elijah` to see 3 tasks already premade for you, use any other name to get a blank To Do List

## Things left to complete

* animation 
* change hold to delete task, to swipe to delete task (add confirmation)

## Backend Architecture

I used two tables for this project, a Users table and a Tasks table. Although I didn't implement authentication if this were made to scale it would have need to be able to seperate users so I used a find or create in order to fake auth. The relationships used are: A user has many tasks and a task belongs to a user. The users controller has the login route which returns all of the users tasks. The Tasks controller contains all the other necessary routes.


## Tests

Only using two tests for an entire application was a tough task. I decided to test the login function on the backend to make sure the proper data was being served to the front end. On the frontend I used a snapshot test in order to make sure the app displays as intended. The reason I picked these two tests is because if both of these tests pass you know you are getting the right information AND the right UX/UI. As this is a one screen application it made sense to me to only test the Logged In component which displays the original screen. 

