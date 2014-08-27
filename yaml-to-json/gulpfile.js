var gulp = require('gulp'),
    yaml = require('gulp-yaml');

gulp.task('migrate', function() {
  gulp.src('./content/*.yaml')
    .pipe(yaml({ pretty: true }))
    .pipe(gulp.dest('./json/'));
});

gulp.task('watch', function() {
  gulp.watch('./content/*.yaml', ['migrate']);
});

gulp.task('default', ['migrate', 'watch']);
