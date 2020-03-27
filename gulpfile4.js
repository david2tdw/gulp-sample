// 返回 event emitter

const {EventEmitter} = require('events')
function eventEmitterTask () {
  const emitter = new EventEmitter();
  setTimeout(() => {
    emitter.emit('finish')
  }, 2000);
  return emitter; // 函数最后要return这个emitter。
}
exports.default = eventEmitterTask;
