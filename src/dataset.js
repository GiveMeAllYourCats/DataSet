const assert = require('assert')
const fs = require('fs')
const path = require('path')
const validator = require('validator')

module.exports = class DataSet {
  exports = { dataset: this }
  data = []
  columns = []
  selection = []
  dataset = this

  constructor(columns) {
    this.columns = columns
    this.loadComponents()
    return this.exports
  }

  loadComponents(...components) {
    for (let file of fs.readdirSync('src/components')) {
      file = file.slice(0, -3)
      if (file == 'basecomponent') continue
      const classFile = require(path.resolve(`./src/components/${file}`))
      const classComponent = new classFile(this)
      assert.equal(this.exports[file], undefined, `${file} is already defined in exports`)
      this.exports[file.charAt(0).toUpperCase() + file.slice(1)] = classComponent
      assert.notEqual(classComponent.dataset, undefined, `${file} is not extended from a DataSet component`)
    }
  }
}
