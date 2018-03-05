const gulp = require('gulp');
const concat = require('gulp-concat');
const config = require('./build.config.js');
const del = require('del');
const webpack = require('webpack');

gulp.task('clean-scripts', () => {
  const dest = config.paths.scripts.dest;
  del([ dest.path + "/" + dest.fileName ], {force: true})
});

gulp.task('clean-styles', () => {
  const dest = config.paths.styles.dest;
  del([ dest.path + "/" + dest.fileName ], {force: true})
});

gulp.task('build-scripts', ['clean-scripts'], done => {
  webpack(config.webpack, (err, stats) => {
    console.log(err ? err : stats.toString());
    done();
  });
});

gulp.task('build-styles', ['clean-styles'], () => {
  const dest = config.paths.styles.dest;
  return gulp.src(config.paths.styles.src)
      .pipe(concat(dest.fileName))
      .pipe(gulp.dest(dest.path));
});

gulp.task('default', ['build-scripts', 'build-styles']);
