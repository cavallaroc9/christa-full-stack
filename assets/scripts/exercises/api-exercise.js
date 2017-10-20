'use strict'

const config = require('../config')
const store = require('../store')

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/exercises',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/exercises',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  index
}
