// 流（stream）所提供的主要的 API 是 .pipe() 方法，用于连接转换流（Transform streams）或可写流（Writable streams）。
const { src, dest } = require('gulp')
const babel = require('gulp-babel')

exports.default = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(dest('output'))
}
// 输出目录如果有同名文件会覆盖
// 大多数情况下，利用 .pipe() 方法将插件放置在 src() 和 dest() 之间，并转换流（stream）中的文件。