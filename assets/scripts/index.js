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
  // Change password
  $('#change-password-page').hide()
  $('#change-password-link').on('click', function () {
    $('#change-password-link').hide()
    $('#all-exercises').hide()
    $('#change-password-page').show('swing')
  })
  $('#cancel-change-password').on('click', function () {
    $('#change-password-page').hide()
    $('#change-password-page input:password').val(null)
    $('#change-password-link').show()
    $('#all-exercises').show('swing')
    $('#app-message').text('')
  })
  $('#change-password').on('submit', authEvents.onChangePassword)
  // App
  $('#app-nav-bar').hide()
  $('#all-exercises').hide()
})
