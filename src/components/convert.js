const dsv = require('d3-dsv')
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')

module.exports = class Convert extends require('./basecomponent') {
  constructor(...args) {
    super(...args)
  }

  convertTo(to) {
    if (to === 'json') {
      console.log(this.dataset.selection)
    }
  }
}
