'use strict'

const store = require('../store')

const createExerciseSuccess = function (data) {
  store.exercise = data.exercise
  console.log('create exercise data is', data)
  $('#new-exercise-page').hide()
  $('#all-exercises-page').show('swing')
  console.log('store exercise is', store.exercise)
  console.log('store user is', store.user)
}

const createExerciseFailure = function (error) {
  console.error(error)
  $('#message').text('Oops! Something went wrong. Please try again.')
}

module.exports = {
  createExerciseSuccess,
  createExerciseFailure
}