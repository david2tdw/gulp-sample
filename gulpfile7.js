// 使用 async/await
const fs = require('fs');

async function asyncAwaitTask() {
  // console.log(fs.readFileSync('package.json', 'utf-8'))
  const { version } = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
  console.log(version);
  await Promise.resolve('some result');
}

exports.default = asyncAwaitTask;