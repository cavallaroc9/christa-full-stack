'use strict'

const store = require('../store')
const showExercisesTemplate = require('../templates/all-exercises-listing.handlebars')

const createExerciseSuccess = function (data) {
  store.exercise = data.exercise
  console.log('create exercise data is', data)
  $('#new-exercise-page').hide()
  $('#app-message').hide()
  $('#all-exercises-content').hide()
  $('#all-exercises-page').show('swing')
  $('#get-exercises').show()
  $('#new-exercise-page input').val(null)
  console.log('store exercise is', store.exercise)
  console.log('store user is', store.user)
}

const createExerciseFailure = function (error) {
  console.error(error)
  $('#app-message').text('Oops! Something went wrong. Please try again. Note: "Name" is required.')
}

const getExercisesSuccess = (data) => {
  console.log(data)
  const showExercisesHtml =
   showExercisesTemplate({ exercises: data.exercises })
  $('#all-exercises-content').show()
  $('#all-exercises-content').append(showExercisesHtml)
  $('#get-exercises').hide()
}

const getExercisesfailure = (error) => {
  console.error(error)
  $('#app-message').text('Oops! Something went wrong. Please try again.')
}

module.exports = {
  createExerciseSuccess,
  createExerciseFailure,
  getExercisesSuccess,
  getExercisesfailure
}
