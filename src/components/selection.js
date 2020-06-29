module.exports = class Selection extends require('./basecomponent') {
  constructor(...args) {
    super(...args)
  }

  getSet(index) {
    this.dataset.selection = this.dataset.data[index]
    return this.dataset.selection
  }

  getSets() {
    this.dataset.selection = this.dataset.data
    return this.dataset.selection
  }

  getColumns() {
    this.dataset.selection = this.dataset.columns
    return this.dataset.selection
  }

  getColumn(column) {
    const filterIndex = this.dataset.columns.indexOf(column)
    this.dataset.selection = this.dataset.data.map(x => x[filterIndex])
    return this.dataset.selection
  }
}
