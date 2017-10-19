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

module.exports = {
  signUpSuccess
}
