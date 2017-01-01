'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
//automatically listen for changes
livereload({start: true});

gulp.task('workflow', function () {
	gulp.src(['./src/sass/**/*.scss', './dist/fa/scss/*.scss'])
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cssnano())
		.pipe(sourcemaps.write('./'))

	.pipe(gulp.dest('./dist/css/'));

});

gulp.task('reload', function() {
  gulp.src(['./src/**/*.*', './index.html'])
  .pipe(livereload());
});

gulp.task('default', function () {
	gulp.watch(['./src/sass/**/*.scss', './dist/fa/scss/*.scss', './index.html'], ['workflow', 'reload']);
});
