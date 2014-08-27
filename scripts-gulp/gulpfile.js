var gulp = require('gulp'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

// Scripts task
gulp.task('dev', function() {
  gulp.src('./src/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./build/'));
});

// Build task
gulp.task('build', ['clean'], function() {
  gulp.src('./src/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/'));
});

// Clean task
gulp.task('clean', function () {
  return gulp.src('./build/*.js')
    .pipe(clean());
});

// Default task
gulp.task('default', ['dev']);
