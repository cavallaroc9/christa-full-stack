'use strict'

const store = require('../store')
// const boardEvents = require('../game-board/events')

const signUpSuccess = function (data) {
  console.log(data)
  $('#sign-up-div').hide()
  $('#sign-up input:text').val(null)
  $('#sign-up input:password').val(null)
  $('#sign-in-div').show()
  $('#message').text('You have successfully created an account!')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Oops! Something went wrong creating your account. Please try again.')
}

const signInSuccess = function (data) {
  console.log(data)
  store.user = data.user
  $('#auth-modules').hide()
  $('#sign-in input:text').val(null)
  $('#sign-in input:password').val(null)
  $('#all-exercises').show()
  $('#app-nav-bar').show()
  // $('#change-password-button').show()
  // $('#sign-out-button').show()
  // $('#create-button').show()
  // $('#message').text('Signed in as ' + store.user.email)
}

const signInFailure = function (error) {
  console.log(error)
  $('#message').text('Oops! Something went wrong. Please try signing in again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
