'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api-auth')
const ui = require('./ui-auth')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onShowSignUp = function () {
  $('#sign-in-div').hide()
  $('#sign-in input').val(null)
  $('#sign-up-div').show()
  $('#message').text('')
}

const onShowSignIn = function () {
  $('#sign-up-div').hide()
  $('#sign-up input').val(null)
  $('#sign-in-div').show()
  $('#message').text('')
}

const onShowChangePassword = function () {
  $('#change-password-link').hide()
  $('#all-exercises-page').hide()
  $('#new-exercise-page').hide()
  $('#edit-exercise-page').hide()
  $('#change-password-page').show('swing')
}

const onHideChangePassword = function () {
  $('#app-message').text('')
  $('#change-password-page').hide()
  $('#change-password-page input').val(null)
  $('#change-password-link').show()
  $('#all-exercises-page').show('swing')
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out-link').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-up-link').on('click', onShowSignUp)
  $('#sign-in-link').on('click', onShowSignIn)
  $('#change-password-link').on('click', onShowChangePassword)
  $('#cancel-change-password').on('click', onHideChangePassword)
}

module.exports = {
  addHandlers
}
