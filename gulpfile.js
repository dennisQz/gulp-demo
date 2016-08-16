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

// 打包
var gbExcludeArr = ['jquery','underscore','backbone','text'];
var rjs = require('requirejs');
gulp.task('optimize', function(cb){
  rjs.optimize({
    /*appDir: '/gulp-demo',*/
    baseUrl: 'source/js',
    paths: {
      customer :'src/customer',
      lib: 'source/lib',
      jquery: 'lib/jquery/jquery-2.2.1.min',
      underscore: 'lib/backbone/underscore',
      backbone: 'lib/backbone/backbone',
      text: 'lib/require/text'      
    },
    optimize: "none",
    dir: 'dist/js/',
    modules: [
      //First set up the common build layer.
      /*{
        //module names are relative to baseUrl
        name: 'lib',
        //List common dependencies here. Only need to list
        //top level dependencies, "include" will find
        //nested dependencies.
        include: [
          'jquery',
          'backbone',
          'jquery'
        ]
      },
*/
      //Now set up a build layer for each page, but exclude
      //the common one. "exclude" will exclude nested
      //the nested, built dependencies from "common". Any
      //"exclude" that includes built modules should be
      //listed before the build layer that wants to exclude it.
      //"include" the appropriate "app/main*" module since by default
      //it will not get added to the build since it is loaded by a nested
      //require in the page*.js files.
      {
        //module names are relative to baseUrl/paths config
        name: 'customer/main',
        /*include: ['customer/main'],*/
        exclude: gbExcludeArr
      },

      /*{
        //module names are relative to baseUrl
        name: '../page2',
        include: ['app/main2'],
        exclude: ['../common']
      }*/
    ]
  }, function(buildResponse){
    // console.log('build response', buildResponse);
    cb();
  }, cb);
});

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