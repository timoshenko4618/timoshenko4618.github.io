var gulp = require("gulp");
const requireDir = require("require-dir");

const paths = require("./paths");
const tasks = requireDir("./tasks");

const build = gulp.parallel(tasks.buildLayouts, tasks.buildStyles, tasks.processAssets);

const watchAssets = () => gulp.watch(paths.assets.srcFiles, tasks.processAssets);
const watchLayouts = () => gulp.watch(paths.layouts.srcFiles, tasks.buildLayouts);
const watchStyles = () => gulp.watch(paths.styles.srcFiles, tasks.buildStyles);
const watchAndReload = () => gulp.watch(paths.distFolder, tasks.browserSyncReload);

const watch = gulp.parallel(watchAssets, watchLayouts, watchStyles, watchAndReload);

const develop = gulp.series(tasks.cleanDist, build, tasks.browserSyncInit, watch);

exports.build = build;
exports.default = develop;
