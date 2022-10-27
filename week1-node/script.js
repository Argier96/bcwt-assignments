'use strict'

const _ = require("lodash")

var result = _.camelCase("Foo Bar")
console.log(result)

var result2 = _.camelCase("This actually works.")
console.log(result2)