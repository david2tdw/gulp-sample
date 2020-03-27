// 返回 promise

function promiseTask () {
  console.log('promiseTask')
  return Promise.resolve('the value is ignored');
}

exports.default = promiseTask;