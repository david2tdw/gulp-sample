// 向流（stream）中添加文件
const { src, dest } = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify') // 压缩js

function outTask() { // 要return结果
  return src('src/*.js')
    .pipe(babel())
    .pipe(src('vender/*.js')) // 添加文件
    .pipe(uglify()) // 压缩js
    .pipe(dest('output'))
}

exports.default = outTask
