# API Repo
https://github.com/cavallaroc9/christa-rails-api

# Heroku App URL
https://murmuring-beyond-57422.herokuapp.com

# Deployed URL
https://cavallaroc9.github.io/christa-full-stack/

# App Description
This app is an exercise tracker that is a great alternative to bringing a notebook to the gym! Once logged in, you can add a list of your favorite exercises and view them all at once. This app allows you to easily update an exercise if you need to make a change, or delete the exercise all together. This exercise tracker will remember all of your updates, so you can pick up where you left off next time you log in. You also have the ability to change your password once logged in.

## Technologies Used
* HTML
* CSS
* SASS
* Handlebars
* Javascript
* Ruby
* Rails
* Heroku
* jQuery
* AJAX

## Unsolved Problems
Right now, when you log into the application, you have to select a button to get a list of the exercises. In a future iteration, I would like the list to automatically display upon login, and get automatically updated when an exercise is created, updated, or deleted.

# Planning, development process and problem-solving strategy (Client Only)
Document your planning and tell a story about your development process and problem-solving strategy.

### Planning and Development Process
* Created wireframes for the app
* Created and prioritized user stores relating to client
* Once stories were prioriized I was able to use them as a guide for what to work on.
* I began with seting up and deploying Client (after API was setup)
* Once API was built, I began implementing the client.
* I Started with getting all the Authentication functionality working (sign up, sign in, change password, sign out)
* Once authentication was working from client, I started working on the exercise tracker functionality
* First, I started with adding the ability to create an exercise for the logged in user.
* Once this was working, I add the ability to return a list of all exercises related to the logged in user. I used handlebars in order to easily display the exercises that were returned from the ajax requests.
* From here, I worked on allowing the user to view one exercise at a time
* Then, I built the functionality to allow the user to update a resource.
* Finally, I built out the functionality to allow a user to delete an exercise.
* All of these actions require a token and the user must be logged in.
* Once the core functionality was built, I worked on enhancing the HTML and CSS.

## Problem Solving Strategy
* If I ran into any issues, I remembered to break the problem into very small peices so that it was easier to understand and solve. If I didn't know what was causing the issue, I would start from the beginning, and use console logging to figure out what functions were getting called and what data was getting returned. Console logging was very helpful in allowing me to troubleshoot the root cause of an issue. If I ran into an issue that I was not familiar with, I used google and class examples.

# ERD
https://imgur.com/ewnOT5z

# Wireframes
https://imgur.com/SKgZnMg


# User Stories

- As a user, I would like to be able to login so that I can record my exercises.
- As a user, I would like to be able to sign up for an account to I can log into the app.
- As a user, I would like to be able to change my password once logged in so my account is secure.
- As a user, I would like to be able to sign out so that someone else cannot access my account.
- As a user, I would like to be able to add new exercises so that I can create a list to reference.
- As a user, I would like to be able to update existing exercises so that I can keep track of my progress.
- As a user, I would like to be able to see a list of all my exercises so that I can reference them when working out.
- As a user, I would like to be able to delete an exercise so that I do not have exercises listed that I no longer use.
