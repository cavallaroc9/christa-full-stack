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
  $('#all-exercises-page').hide()
  $('#new-exercise-page').hide()
  $('#edit-exercise-page').hide()
})
