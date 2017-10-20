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

module.exports = {
  onCreateExercise,
  onGetExercises
}
