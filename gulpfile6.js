// 使用 callback
// 如果任务（task）不返回任何内容，则必须使用 callback 来指示任务已完成。
const fs = require('fs')

// ?
function callbackError(cb) {
  cb(new Error('callbackerror'))
}

function passingCallback(cb) {
  fs.access('gulpfile.js', cb)
}

exports.default = passingCallback
