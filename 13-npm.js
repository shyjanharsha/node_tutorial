// npm - global command ,comes with node
// npm --version
// local dependecy - use it only in this particular project
// npm i <packageName>
// global dependecy - use it in any project 
// npm install -g <packageName>

// package.json - mainfest file (stores importent info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step ,press enter to skip)
// npm init -y (everything default)

//Dev dependency 
// npm i <packageName> -D or npm i <packageName> --save-d 

const _ = require('lodash')

const items = [1,[2,[3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)
// console.log("HELLO")
 
console.log("AAAAAAAAAAAAAAA")