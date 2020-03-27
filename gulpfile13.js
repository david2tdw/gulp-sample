// 文件监控
const { src, dest, watch } = require('gulp');


function outTask() { // 要return结果
  return src('src/*.js')
    .pipe(dest('output'))
}

// 文件第一次修改之后要等待 500 毫秒才执行关联的任务
watch('src/*.js', { delay: 500 }, function(cb) {
  // body omitted
  console.log('123')
  cb();
});

exports.default = outTask