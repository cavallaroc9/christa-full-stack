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

module.exports = {
  onSignUp
}
