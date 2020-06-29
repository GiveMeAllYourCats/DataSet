const dsv = require('d3-dsv')
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')
const assert = require('assert')

module.exports = class Operation extends require('./basecomponent') {
  constructor(...args) {
    super(...args)
  }

  set(...sets) {
    this.dataset.data = []
    this.add(...sets)
  }

  add(sets) {
    let foundType
    if (sets.constructor == Object) {
      foundType = 'table'
    }
    if (Array.isArray(sets)) {
      foundType = 'native'
      if (sets[0].constructor === Object) {
        foundType = 'object'
      }
    }

    // TODO: Automatically converting the series to add into the starting dataset type
    // NOTE: GiveMeAllYourCats: I think it's better to always convert the adding data to a native type so all the functions expect the same input.
    assert.equal(foundType, 'native', 'Only native dataset series are supported for adding right now')
    this.dataset.dataType = foundType
    this.dataset.data.push(sets)
  }
}
