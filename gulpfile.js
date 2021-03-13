let gulp = require('gulp');
let scss = require('gulp-sass');

gulp.task('default', function () {
  return gulp.src('scss/*.scss').pipe(scss()).pipe(gulp.dest('css'));
});
