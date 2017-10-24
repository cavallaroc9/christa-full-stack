'use strict'

const store = require('../store')
const showExercisesTemplate = require('../templates/all-exercises-listing.handlebars')
const showEditExerciseTemplate = require('../templates/exercise-listing.handlebars')

const createExerciseSuccess = function (data) {
  store.exercise = data.exercise
  // console.log('create exercise data is', data)
  $('#new-exercise-page').hide()
  $('#all-exercises-content').hide()
  $('#all-exercises-page').show('swing')
  $('#new-exercise-page input').val(null)
  $('#app-message').show()
  $('#app-message').text('Your exercise was succussfully added!')
  // console.log('store exercise is', store.exercise)
  // console.log('store user is', store.user)
}

const createExerciseFailure = function () {
  // console.error(error)
  $('#app-message').show()
  $('#app-message').text('Oops! Something went wrong. Please try again. Please note that some fields are required.')
}

const getExercisesSuccess = (data) => {
  // console.log(data)
  const showExercisesHtml =
   showExercisesTemplate({ exercises: data.exercises })
  $('#all-exercises-content').show()
  $('#all-exercises-content').html(showExercisesHtml)
}

const getExercisesfailure = () => {
  // console.error(error)
  $('#app-message').show()
  $('#app-message').text('Oops! Something went wrong. Please try again.')
}

const showExerciseSuccess = function (data) {
  store.exercise = data.exercise
  $('#all-exercises-page').hide()
  $('#app-message').hide()
  $('#edit-exercise-page').show('swing')
  // console.log('show exercise data is', data)
  const showEditExerciseHtml = showEditExerciseTemplate({ exercise: data.exercise })
  $('#edit-exercise-content').show()
  $('#edit-exercise-content').html(showEditExerciseHtml)
}

const showExerciseFailure = function () {
  // console.log('it failed')
  $('#app-message').show()
  $('#app-message').text('Oops! Something went wrong. Please try again.')
}

const updateExerciseSuccess = function (data) {
  store.exercise = data.exercise
  // console.log('updated exercise data is', data)
  $('#edit-exercise-page').hide()
  $('#edit-exercise-content').hide()
  $('#all-exercises-content').hide()
  $('#all-exercises-page').show('swing')
  $('#app-message').show()
  $('#app-message').text('Your exercise was succussfully updated!')
  // console.log('store exercise is', store.exercise)
  // console.log('store user is', store.user)
}

const updateExerciseFailure = function () {
  // console.log(error)
  $('#app-message').show()
  $('#app-message').text('Oops! Something went wrong. Please try again. Please note that some fields are required.')
}

const deleteExerciseSuccess = function () {
  store.exercise = {}
  // console.log('deleted exercise data is', store.exercise)
  $('#edit-exercise-page').hide()
  $('#edit-exercise-content').hide()
  $('#all-exercises-content').hide()
  $('#all-exercises-page').show('swing')
  $('#app-message').show()
  $('#app-message').text('Your exercise was succussfully deleted!')
  // console.log('store exercise is', store.exercise)
  // console.log('store user is', store.user)
}

const deleteExerciseFailure = function () {
  // console.log(error)
  $('#app-message').show()
  $('#app-message').text('Oops! Something went wrong. Please try again.')
}

module.exports = {
  createExerciseSuccess,
  createExerciseFailure,
  getExercisesSuccess,
  getExercisesfailure,
  showExerciseSuccess,
  showExerciseFailure,
  updateExerciseSuccess,
  updateExerciseFailure,
  deleteExerciseSuccess,
  deleteExerciseFailure
}
