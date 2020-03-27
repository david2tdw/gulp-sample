// 将当前目录下的所有.js文件输出到output文件夹底下
const {src, dest} = require('gulp');

function streamTask () {
  return src('*.js')
  .pipe(dest('output'));
}

exports.default = streamTask;