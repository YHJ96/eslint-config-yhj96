const javascript = require("./src/javacript");
const typescript = require("./src/typescript");

module.exports = {
  ...javascript,
  overrides: [typescript],
};
