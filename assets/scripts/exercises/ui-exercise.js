'use strict'

const store = require('../store')
const api = require('./api-exercise')
const showExercisesTemplate = require('../templates/all-exercises-listing.handlebars')
const showEditExerciseTemplate = require('../templates/exercise-listing.handlebars')

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
  $('#all-exercises-content').empty()
  $('#all-exercises-content').append(showExercisesHtml)
  $('#get-exercises').hide()
  // When exercise is clicked, show edit view of resource
  // need show call
  $('#all-exercises-content').on('click', function (event) {
    console.log('exercise content is', event.target.getAttribute('data-id'))
    const exerciseId = event.target.getAttribute('data-id')
    onGetExerciseById(exerciseId)
  })
}

const getExercisesfailure = (error) => {
  console.error(error)
  $('#app-message').text('Oops! Something went wrong. Please try again.')
}

const onGetExerciseById = function (exerciseId) {
  event.preventDefault()
  api.show(exerciseId)
    .then(showExerciseSuccess)
    .catch(showExerciseFailure)
}

const showExerciseSuccess = function (data) {
  $('#all-exercises-page').hide()
  $('#edit-exercise-page').show('swing')
  console.log('show exercise data is', data)
  const showEditExerciseHtml = showEditExerciseTemplate({ exercise: data.exercise })
  $('#edit-exercises-content').show()
  $('#edit-exercises-content').empty()
  $('#edit-exercises-content').append(showEditExerciseHtml)
}

const showExerciseFailure = function () {
  console.log('it failed')
  $('#app-message').text('Oops! Something went wrong. Please try again.')
}

module.exports = {
  createExerciseSuccess,
  createExerciseFailure,
  getExercisesSuccess,
  getExercisesfailure
}
