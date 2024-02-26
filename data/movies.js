const { list1 } = require("./list1");
const { list2 } = require("./list2");
const { list3 } = require("./list3");

const movies = [
  ...list1,
  ...list2,
  ...list3
]

module.exports = movies