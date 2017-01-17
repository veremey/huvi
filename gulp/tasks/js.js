var gulp = require('gulp');
// var include = require("gulp-include");
var uglify = require('gulp-uglifyjs');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var config = require('../config');
// reload = browserSync.reload;

gulp.task('js', function() {
  return gulp.src([
  		config.src.js + 'lib/**/*.js',
  		config.src.js + 'animations.js',
  		config.src.js + 'global.js',
  		config.src.js + 'init-animations.js',
  		config.src.js + 'init-global.js'])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.dest.js));
});

gulp.task('js:watch', function() {
    gulp.watch(config.src.js+'**/*.js', ['js']);
});