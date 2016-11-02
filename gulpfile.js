var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var del = require('del');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var ejs = require('gulp-ejs');
var exec = require('gulp-exec');
var nodemon = require('gulp-nodemon');
var clean = require('gulp-clean')

gulp.task('clean', function(){
	// return gulp.src('build', {force: true})
 //        .pipe(clean());
});

gulp.task('css', function() {
	return gulp.src('src/scss/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('build/assets/css'));
});

gulp.task('js', function() {
	gulp.src('src/js/data/*')
    	.pipe(gulp.dest('build/data'));
    gulp.src('src/js/index.js')
    	.pipe(gulp.dest('build'));
});

gulp.task('ejs', function() {
	   	return gulp.src('src/views/**/*.ejs')
    	.pipe(gulp.dest('build/views'));
});

gulp.task('serve', function() {
	nodemon({ script: 'build/index.js'})
});

// The default task (called when we run `gulp` from cli)
gulp.task('default', ['clean', 'css', 'js', 'ejs', 'serve'], function() {

});
