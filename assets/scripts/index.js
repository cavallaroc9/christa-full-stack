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
  authEvents.addHandlers()
  $('#sign-up-div').hide()
  $('#change-password-page').hide()
  $('#app-nav-bar').hide()
  exerciseEvents.addHandlers()

  // Get all exercises
  $('#all-exercises-page').hide()
  // $('#get-exercises').on('click', exerciseEvents.onGetExercises)
  // $('#add-exercise-btn').on('click', function () {
  //   $('#all-exercises-page').hide()
  //   $('#new-exercise-page').show('swing')
  // })
  // Create Exercise
  $('#new-exercise-page').hide()
  // $('#cancel-new-exercise').on('click', function () {
  //   $('#new-exercise-page').hide()
  //   $('#all-exercises-page').show('swing')
  //   $('#new-exercise-page input').val(null)
  // })
  // $('#create-exercise').on('submit', exerciseEvents.onCreateExercise)

  // Show Exercise
  $('#edit-exercise-page').hide()
  // $('#cancel-edit-exercise').on('click', function () {
  //   $('#app-message').text('')
  //   $('#edit-exercise-page').hide()
  //   $('#all-exercises-page').show('swing')
  // })
})
