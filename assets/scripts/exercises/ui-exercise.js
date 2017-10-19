'use strict'

const store = require('../store')

const createExerciseSuccess = function (data) {
  store.exercise = data.exercise
  console.log('create exercise data is', data)
  $('#new-exercise-page').hide()
  $('#all-exercises-page').show('swing')
  $('#new-exercise-page input').val(null)
  console.log('store exercise is', store.exercise)
  console.log('store user is', store.user)
}

const createExerciseFailure = function (error) {
  console.error(error)
  $('#app-message').text('Oops! Something went wrong. Please try again. Note: "Name" is required.')
}

module.exports = {
  createExerciseSuccess,
  createExerciseFailure
}
