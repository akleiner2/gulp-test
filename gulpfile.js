//require gulp
var gulp = require('gulp');
//require jshint
var jshint = require('gulp-jshint');
//require sass
var sass = require('gulp-sass');
//require minify css
var minCSS = require('gulp-minify-css');
//set up the jshint task
gulp.task('jshint', function() {
  gulp.src('./scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//set up the sass compilation
gulp.task('sass', function(){
  gulp.src('./scss/*.scss')
  	.pipe(sass())
  	.pipe(gulp.dest('./css'));
});

