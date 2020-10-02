const del = require("del");
const paths = require("../paths.js");

module.exports = function cleanAssets() {
  return del(paths.distFolder, { force: true });
};
