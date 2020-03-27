// 处理文件

const {src, dest} = require('gulp')
const babel = require('gulp-babel')
function fileTask () {
  return src('src/*.js').pipe(babel()).
  pipe(dest('output'))
}
exports.default = fileTask
