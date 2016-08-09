/*
  This is an EXAMPLE gulpfile.js
  You'll want to change it to match your project.
  Find plugins at https://npmjs.org/browse/keyword/gulpplugin
*/
var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

// 检查脚本
gulp.task('lint', function() {
  gulp.src('source/js/**/**/*.js')
      .pipe(jshint().on('error', sass.logError))
      .pipe(jshint.reporter('default'));
});

// 压缩
/*gulp.task('uglify', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  gulp.src(['source/js/src/!**!/!*.js', '!source/js/src/main/!**'])
      .pipe(uglify().on('error', sass.logError))
      .pipe(gulp.dest('dist/js'));
});*/

// 合并，压缩文件
gulp.task('scripts', function() {
  gulp.src('source/js/lib/**')
      .pipe(concat('all.js'))
      .pipe(gulp.dest('dist/js/lib'))
      .pipe(rename('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js/lib'));
});

// 编译Sass
gulp.task('sass', function() {
    gulp.src('source/asset/scss/**')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/asset/css/'));
});

// The default task (called when you run `gulp`)
gulp.task('default', function() {
  gulp.run('lint', 'sass', 'scripts');
  
  gulp.watch([
    'source/asset/scss/**'
  ], function(event) {
    gulp.run('sass');
  });
});