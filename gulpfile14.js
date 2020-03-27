var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('task-sass', function() {
  return gulp
    .src(['scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('scssoutput/'))
})

gulp.task('watch-sass', function() {
  var watcher = gulp.watch('scss/*.scss', gulp.series(['task-sass']))
  watcher.on('change', function(event) {
    console.log(event)
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
    if (event.type === 'added') {
      console.log('add')
    } else if (event.type === 'deleted') {
      console.log('del')
    }
  })
})

// npm install node-sass gulp-sass --save-dev
// 执行：gulp watch-sass
// gulp task-sass
