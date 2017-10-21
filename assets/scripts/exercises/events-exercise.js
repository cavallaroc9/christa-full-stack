'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api-exercise')
const ui = require('./ui-exercise')

const onCreateExercise = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  api.create(data)
    .then(ui.createExerciseSuccess)
    .catch(ui.createExerciseFailure)
}

const onGetExercises = (event) => {
  event.preventDefault()
  api.index()
    .then(ui.getExercisesSuccess)
    .catch(ui.getExercisesfailure)
}

const onShowAddExercise = () => {
  $('#all-exercises-page').hide()
  $('#new-exercise-page').show('swing')
}

const onHideAddExercise = () => {
  $('#new-exercise-page').hide()
  $('#all-exercises-page').show('swing')
  $('#new-exercise-page input').val(null)
}

const onHideEditExercise = () => {
  $('#app-message').text('')
  $('#edit-exercise-page').hide()
  $('#all-exercises-page').show('swing')
}

const onShowEditExercise = (event) => {
  const exerciseId = event.target.getAttribute('data-id')
  console.log('exerciseID', exerciseId)
  onGetExerciseById(exerciseId)
}

const onGetExerciseById = (exerciseId) => {
  event.preventDefault()
  api.show(exerciseId)
    .then(ui.showExerciseSuccess)
    .catch(ui.showExerciseFailure)
}

const onUpdateExercise = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.update(formData)
    .then(ui.updateExerciseSuccess)
    .catch(ui.updateExerciseFailure)
}

const onDeleteExercise = function (event) {
  event.preventDefault()
  api.destroy()
    .then(ui.deleteExerciseSuccess)
    .catch(ui.deleteExerciseFailure)
}

const addHandlers = () => {
  $('#create-exercise').on('submit', onCreateExercise)
  $('#get-exercises').on('click', onGetExercises)
  $('#add-exercise-btn').on('click', onShowAddExercise)
  $('#cancel-new-exercise').on('click', onHideAddExercise)
  $('#cancel-edit-exercise').on('click', onHideEditExercise)
  $('#all-exercises-content').on('click', onShowEditExercise)
  $('#update-exercise').on('submit', onUpdateExercise)
  $('#delete-exercise').on('click', onDeleteExercise)
}
module.exports = {
  addHandlers
}
