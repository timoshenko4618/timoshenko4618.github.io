const browserSync = require("browser-sync");

module.exports = function browserSyncInit(cb) {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  cb();
};
