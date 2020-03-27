// 分阶段输出
// 此功能可用于在同一个管道（pipeline）中创建未压缩（unminified）和已压缩（minified）的文件。
const { src, dest } = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

function defaultTask() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(src('vender/*.js'))
    .pipe(dest('output/'))
    .pipe(uglify())
    .pipe(
      rename({
        extname: '.min.js'
      })
    )
    .pipe(dest('output/'))
}

exports.default = defaultTask
