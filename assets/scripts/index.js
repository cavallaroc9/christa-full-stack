'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events-auth')

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
    $('#sign-in input:text').val(null)
    $('#sign-in input:password').val(null)
    $('#sign-up-div').show()
    $('#message').text('')
  })
  $('#sign-up').on('submit', authEvents.onSignUp)
  // Sign In
  $('#sign-in-link').on('click', function () {
    $('#sign-up-div').hide()
    $('#sign-up input:text').val(null)
    $('#sign-up input:password').val(null)
    $('#sign-in-div').show()
    $('#message').text('')
  })
  $('#sign-in').on('submit', authEvents.onSignIn)

  // App
  $('#app-nav-bar').hide()
  $('#all-exercises').hide()
})
