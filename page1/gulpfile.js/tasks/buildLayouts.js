const gulp = require("gulp");
const paths = require("../paths.js");

module.exports = function buildLayouts(cb) {
  return gulp.src(paths.layouts.srcFiles).pipe(gulp.dest(paths.distFolder));
};
