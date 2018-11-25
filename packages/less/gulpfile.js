const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-clean-css');
const path = require('path');
const fs = require('fs-extra');

gulp.task('compile', function () {
  fs.emptyDirSync('./lib');
  return gulp.src('./src/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'src')]
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

gulp.task('lib', ['compile'], () => {
  fs.copySync('./lib', '../../es/less');
  fs.copySync('./lib', '../../lib/less');
});

gulp.task('default', ['lib']);
