'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  // console.log(data)
  $('#sign-up-div').hide()
  $('#sign-up input:text').val(null)
  $('#sign-up input:password').val(null)
  $('#sign-in-div').show()
  $('#message').text('You have successfully created an account!')
}

const signUpFailure = function () {
  // console.error(error)
  $('#message').text('Oops! Something went wrong creating your account. Please try again.')
}

const signInSuccess = function (data) {
  // console.log(data)
  store.user = data.user
  $('#auth-modules').hide()
  $('#sign-in input:text').val(null)
  $('#sign-in input:password').val(null)
  $('#all-exercises-page').show()
  $('#app-nav-bar').show()
  $('#change-password-link').show()
}

const signInFailure = function () {
  // console.log(error)
  $('#message').text('Oops! Something went wrong. Please try signing in again.')
}

const changePasswordSuccess = function () {
  // console.log('Changed Password successfully!')
  $('#change-password-page').hide()
  $('#change-password-page input').val(null)
  $('#change-password-link').show()
  $('#all-exercises-page').show('swing')
  $('#app-message').show()
  $('#app-message').text('You have successfully changed your password for account ' + store.user.email)
}

const changePasswordFailure = function () {
  // console.log(error)
  $('#app-message').show()
  $('#app-message').text('Oops! Something went wrong. Please try changing your password again.')
}

const signOutSuccess = function () {
  // console.log('Signed Out successfully!')
  store.user = null
  $('#app-nav-bar').hide()
  $('#app-message').hide()
  $('#change-password-page').hide()
  $('#all-exercises-page').hide()
  $('#all-exercises-content').hide()
  $('#new-exercise-page').hide()
  $('#edit-exercise-page').hide()
  $('#auth-modules').show()
  $('#change-password input').val(null)
  $('#message').text('You have signed out successfully!')
  // console.log(store.user)
}

const signOutFailure = function () {
  // console.log(error)
  $('#app-message').show()
  $('#app-message').text('Oops! Something went wrong. Please try signing out again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
