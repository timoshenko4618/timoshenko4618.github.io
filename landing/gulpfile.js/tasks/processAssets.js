const gulp = require("gulp");
const paths = require("../paths.js");

module.exports = function processAssets() {
  return gulp.src(paths.assets.srcFiles).pipe(gulp.dest(paths.assets.distFolder));
};
