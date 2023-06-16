const javascript = require("./src/javacript");
const typescript = require("./src/typescript");

console.log(typescript);

module.exports = {
  ...javascript,
  overrides: [typescript],
};
