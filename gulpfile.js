/*
  This is an EXAMPLE gulpfile.js
  You'll want to change it to match your project.
  Find plugins at https://npmjs.org/browse/keyword/gulpplugin
*/
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('asset/scss/**')
        .pipe(sass())
        .pipe(gulp.dest('dist/css/'));
});

// The default task (called when you run `gulp`)
gulp.task('default', function() {
  gulp.run('sass');

  gulp.watch([
    'asset/scss/**'
  ], function(event) {
    gulp.run('sass');
  });
});