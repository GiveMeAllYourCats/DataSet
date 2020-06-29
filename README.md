# DataSet

A NodeJS library inspired by the [pandas](https://pandas.pydata.org/docs/getting_started/index.html) library in python

When working with tabular data, such as data stored in spreadsheets or databases, DataSet is the right tool for you. DataSet will help you to explore, clean and process your data.

### DataSet Concept

a **DataSet** consists of **Sets** which hold data called a **Set**, **Sets** are bound by a **Index** and the **Set** key are defined by a **Column**
![](https://i.imgur.com/B2uK2Oj.png)

### Features

_The goal of DataSet is to closely imitate the familiar [pandas](https://pandas.pydata.org/docs/getting_started/index.html) library in python_

#### Import & Export

_DataSet should be able to import and export to the most common data file types and services_

![](https://i.imgur.com/9I7Zn6M.png)

#### Slice & Extract

_Can filter your data conditional based, ready to be extracted_

![](https://i.imgur.com/zTaPV2E.png)

#### Plot to graph

_Can easily create graphs that spawns via electron_

![](https://i.imgur.com/PHBpIgf.png)

#### Add/create columns

_Can create new columns from existing data that has been filtered/calculated in your DataSet_

![](https://i.imgur.com/WtD7XA4.png)

#### Calculations

_Can create meaningful calculations and aggregations_

![](https://i.imgur.com/I4jFcDu.png)

#### Combine DataSets

_Can combine multiple DataSets as one_

![](https://i.imgur.com/oY2ks3E.png)

### Example code

```js
const DataSet = require('./src/dataset')
const ds = new DataSet(['time', 'open', 'high', 'low', 'close', 'volume'])
ds.set(
	[1593275000, 345, 434, 435, 420, 24256],
	[1593276000, 344, 455, 345, 245, 21112],
	[1593277000, 345, 434, 544, 235, 27421],
	[1593278000, 533, 545, 434, 454, 25435]
)
console.log(ds.getSets()) // [ [ 1593275000, 345, 434, 435, 420, 24256 ] ]
console.log(ds.getColumns()) // [ 'time', 'open', 'high', 'low', 'close', 'volume' ]
console.log(ds.getColumn('volume')) // [24256, 21112, 27421, 25435]

// Or import a CSV
const ds = new DataSet()
await ds.dsv(',', './somedata.csv') // Loads the CSV to a DataSet with a , as delimiter
```

### Todos

- Look, Learn and figure out what other equivalent libraries are doing
- Figure out what documentation library to use
- Write Tests
- Probably more that I forgot!

### Code Style

- Will update here, but no semicolons for sure.. i'm a semicolon nazi xD

### Contributing

If you want to contribute check out the components files and see what is missing or what could use some extra love and send me a pull request on whatever you like💖

## License

Copyright (c) 2020 by GiveMeAllYourCats. Some rights reserved.
DataSet is licensed under the MIT License as stated in the LICENSE file.
