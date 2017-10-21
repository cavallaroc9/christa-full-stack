'use strict'

const store = require('../store')
const api = require('./api-exercise')
const getFormFields = require(`../../../lib/get-form-fields`)
const showExercisesTemplate = require('../templates/all-exercises-listing.handlebars')
const showEditExerciseTemplate = require('../templates/exercise-listing.handlebars')

const createExerciseSuccess = function (data) {
  store.exercise = data.exercise
  // console.log('create exercise data is', data)
  $('#new-exercise-page').hide()
  $('#app-message').hide()
  $('#all-exercises-content').hide()
  $('#all-exercises-page').show('swing')
  $('#get-exercises').show()
  $('#new-exercise-page input').val(null)
  $('#app-message').show()
  $('#app-message').text('Your exercise was succussfully added!')
  // console.log('store exercise is', store.exercise)
  // console.log('store user is', store.user)
}

const createExerciseFailure = function (error) {
  console.error(error)
  $('#app-message').show()
  $('#app-message').text('Oops! Something went wrong. Please try again. Please note: name is required.')
}

const getExercisesSuccess = (data) => {
  // console.log(data)
  $('#app-message').hide()
  $('#get-exercises').hide()
  const showExercisesHtml =
   showExercisesTemplate({ exercises: data.exercises })
  $('#all-exercises-content').show()
  // $('#all-exercises-content').empty()
  $('#all-exercises-content').html(showExercisesHtml)
  // When exercise is clicked, show edit view of resource
  // need show call
  // $('#all-exercises-content').on('click', function (event) {
  //   // console.log('exercise content is', event.target.getAttribute('data-id'))
  //   const exerciseId = event.target.getAttribute('data-id')
  //   onGetExerciseById(exerciseId)
  // })
}

const getExercisesfailure = (error) => {
  console.error(error)
  $('#app-message').text('Oops! Something went wrong. Please try again.')
}

// const onGetExerciseById = function (exerciseId) {
//   event.preventDefault()
//   api.show(exerciseId)
//     .then(showExerciseSuccess)
//     .catch(showExerciseFailure)
// }

const showExerciseSuccess = function (data) {
  store.exercise = data.exercise
  $('#all-exercises-page').hide()
  $('#edit-exercise-page').show('swing')
  console.log('show exercise data is', data)
  const showEditExerciseHtml = showEditExerciseTemplate({ exercise: data.exercise })
  $('#edit-exercise-content').show()
  // $('#edit-exercise-content').empty()
  $('#edit-exercise-content').html(showEditExerciseHtml)
  // $('#update-exercise').off()
  // $('#update-exercise').on('submit', onUpdateExercise)
  // $('#delete-exercise').off()
  // $('#delete-exercise').on('click', onDeleteExercise)
}

const showExerciseFailure = function () {
  console.log('it failed')
  $('#app-message').text('Oops! Something went wrong. Please try again.')
}

// const onUpdateExercise = function (event) {
//   event.preventDefault()
//   const formData = getFormFields(event.target)
//   console.log('onUpdateExercise data is ', store.exercise)
//   api.update(formData)
//     .then(updateExerciseSuccess)
//     .catch(updateExerciseFailure)
// }

const updateExerciseSuccess = function (data) {
  store.exercise = data.exercise
  console.log('updated exercise data is', data)
  $('#edit-exercise-page').hide()
  $('#edit-exercise-content').hide()
  $('#app-message').hide()
  $('#all-exercises-content').hide()
  $('#all-exercises-page').show('swing')
  $('#get-exercises').show()
  // console.log('store exercise is', store.exercise)
  // console.log('store user is', store.user)
}

const updateExerciseFailure = function (error) {
  console.log(error)
  $('#app-message').text('Oops! Something went wrong. Please try again. Please note: name is required.')
}

// const onDeleteExercise = function (event) {
//   event.preventDefault()
//   console.log('onDelete data is ', store.exercise)
//   api.destroy()
//     .then(deleteExerciseSuccess)
//     .catch(deleteExerciseFailure)
// }

const deleteExerciseSuccess = function () {
  store.exercise = {}
  console.log('deleted exercise data is', store.exercise)
  $('#edit-exercise-page').hide()
  $('#edit-exercise-content').hide()
  $('#app-message').hide()
  $('#all-exercises-content').hide()
  $('#all-exercises-page').show('swing')
  $('#get-exercises').show()
  // console.log('store exercise is', store.exercise)
  // console.log('store user is', store.user)
}

const deleteExerciseFailure = function (error) {
  console.log(error)
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
