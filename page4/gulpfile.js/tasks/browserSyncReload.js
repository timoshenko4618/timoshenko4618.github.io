const browserSync = require("browser-sync");

module.exports = function browserSyncReload(cb) {
  browserSync.reload();
  cb();
};
