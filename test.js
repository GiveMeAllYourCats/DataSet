const DataSet = require('./src/dataset')

const ds = new DataSet(['time', 'open', 'high', 'low', 'close', 'volume'])

// NATIVE

ds.set(
  [1593275000, 345, 434, 435, 420, 24256],
  [1593276000, 344, 455, 345, 245, 21112],
  [1593277000, 345, 434, 544, 235, 27421],
  [1593278000, 533, 545, 434, 454, 25435]
)

// HASH

// ds.add({
//   time: [1593275000, 1593276000, 1593277000, 1593278000],
//   open: [345, 344, 345, 533],
//   high: [545, 434, 455, 434],
//   low: [435, 345, 544, 434],
//   close: [420, 245, 235, 454],
//   volume: [24256, 21112, 27421, 25435]
// })

// COLLECTION

// ds.set([
//   { time: 1593275000, open: 345, high: 324, low: 212, close: 515, volume: 57535 },
//   { time: 1593276000, open: 355, high: 334, low: 222, close: 525, volume: 56535 },
//   { time: 1593277000, open: 365, high: 344, low: 232, close: 545, volume: 55535 },
//   { time: 1593278000, open: 375, high: 354, low: 242, close: 555, volume: 54535 }
// ])

console.log(ds.getSets())
console.log(ds.getColumns())
console.log(ds.getSets())
console.log(ds.getColumn('volume'))
process.exit()

// yeet
;(async () => {
  const ds = new DataSet()
  await ds.dsv(',', './somedata.csv')
  console.log(ds)
  console.log(ds.getColumns())
  console.log(ds.getSets())
  console.log(ds.getColumn('Year'))
})()
