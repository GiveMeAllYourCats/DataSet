const dsv = require('d3-dsv')
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')

module.exports = class Parse extends require('./basecomponent') {
  constructor(...args) {
    super(...args)
  }

  // Parses DSV formatted files (local file or url) into a dataset
  dsv(...args) {
    const delimiter = args[0]
    const paths = args.slice(1, args.length)
    return new Promise(async resolve => {
      paths.forEach(async item => {
        const name = path.basename(item).split('.')[0]
        let text
        if (fs.existsSync(path.resolve(item))) {
          text = fs.readFileSync(path.resolve(item), 'utf-8')
        } else {
          text = await (await fetch(item)).text()
        }
        const psv = dsv.dsvFormat(delimiter)
        const dsvResult = psv.parse(text)
        this.dataset.columns = dsvResult.columns
        this.dataset.data = dsvResult.filter(item => {
          return item
        })
      })
      return resolve(this.dataset.exports)
    })
  }
}
