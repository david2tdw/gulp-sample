// function defaultTask (cb) {
//   cb();
// }
// exports.default =defaultTask

const { series, parallel } = require('gulp')
// 私有任务 private task
function clean (cb) {
  console.log('clean')
  cb() // callback函数必须被调用
}

// 公开任务 public task
function buildTask (cb) {
  console.log('buildTask')
  console.log(process.env.NODE_ENV)
  cb()
}

function js (cb) {
  console.log('js');
  cb()
}

function css(cb) {
  console.log('css');
  cb()
}
exports.build = parallel(js, css, buildTask) // 公开任务
// exports.build = build; // 公开任务
exports.default  = series(clean, parallel(js, css))

// 运行gulp，执行脚本。默认文件为gulpfile.js
// $ gulp build, 调用public task
// $ gulp --tasks, 查看任务流程