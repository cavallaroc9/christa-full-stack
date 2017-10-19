'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events-auth')
const exerciseEvents = require('./exercises/events-exercise')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Sign Up
  $('#sign-up-div').hide()
  $('#sign-up-link').on('click', function () {
    $('#sign-in-div').hide()
    $('#sign-in input').val(null)
    $('#sign-up-div').show()
    $('#message').text('')
  })
  $('#sign-up').on('submit', authEvents.onSignUp)
  // Sign In
  $('#sign-in-link').on('click', function () {
    $('#sign-up-div').hide()
    $('#sign-up input').val(null)
    $('#sign-in-div').show()
    $('#message').text('')
  })
  $('#sign-in').on('submit', authEvents.onSignIn)
  // Change password
  $('#change-password-page').hide()
  $('#change-password-link').on('click', function () {
    $('#change-password-link').hide()
    $('#all-exercises-page').hide()
    $('#new-exercise-page').hide()
    $('#change-password-page').show('swing')
  })
  $('#cancel-change-password').on('click', function () {
    $('#app-message').text('')
    $('#change-password-page').hide()
    $('#change-password-page input').val(null)
    $('#change-password-link').show()
    $('#all-exercises-page').show('swing')
  })
  $('#change-password').on('submit', authEvents.onChangePassword)

  // Sign Out
  $('#sign-out-link').on('click', authEvents.onSignOut)

  // App
  $('#app-nav-bar').hide()

  // Get all exercises
  $('#all-exercises-page').hide()
  $('#add-exercise-btn').on('click', function () {
    $('#all-exercises-page').hide()
    $('#new-exercise-page').show('swing')
  })
  // Create Exercise
  $('#new-exercise-page').hide()
  $('#cancel-new-exercise').on('click', function () {
    $('#new-exercise-page').hide()
    $('#all-exercises-page').show('swing')
    $('#new-exercise-page input').val(null)
  })
  $('#create-exercise').on('submit', exerciseEvents.onCreateExercise)
})
