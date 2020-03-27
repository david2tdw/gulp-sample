const del = require('delete');

exports.default = function(cb) {
  // 直接使用 `delete` 模块，避免使用 gulp-rimraf 插件
  del(['output/*.js'], cb);
}