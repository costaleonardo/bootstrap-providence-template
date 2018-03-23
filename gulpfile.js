const gulp = require('gulp'),
      gulpRename = require('gulp-rename'),
      gulpSass = require('gulp-sass'),
      gulpCleanCss = require('gulp-clean-css'),
      gulpMinifyJs = require('gulp-js-minify');

// Compile sass with gulp-sass
gulp.task('compile-sass', () => {
  return gulp.src('./sass/style.scss')
             .pipe(gulpSass({errLogToConsole: true}))
             .pipe(gulp.dest('./css'));
});

// Watch for changes and compile sass
gulp.task('watch-sass', () => {
  gulp.watch('./sass/**/*.scss', ['compile-sass']);
});
