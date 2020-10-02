const gulp = require("gulp");
//const gulpAutoprefixer = require("gulp-autoprefixer");
const gulpRename = require("gulp-rename");
const gulpSass = require("gulp-sass");
const gulpSourcemaps = require("gulp-sourcemaps");

const paths = require("../paths.js");

module.exports = function buildStyles() {
  return (
    gulp
      .src(paths.styles.srcMainFile)
      .pipe(gulpSourcemaps.init())
      .pipe(
        gulpSass({
          outputStyle: "compressed"
        }).on("error", gulpSass.logError)
      )
      .pipe(gulpRename({ basename: "styles", suffix: ".min" }))
      //.pipe(gulpAutoprefixer(["last 15 versions"]))
      .pipe(
        gulpSourcemaps.write({
          includeContent: false,
          sourceRoot: `../${paths.styles.relativeSrcFolder}`
        })
      )
      .pipe(gulp.dest(paths.distFolder))
  );
};
