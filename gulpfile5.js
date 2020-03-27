//返回 child process

const { exec } = require('child_process'); // node中的child_process模块
function childProcessTask() {
  return exec('pwd'); // 要执行的本地命令
}

exports.default = childProcessTask
