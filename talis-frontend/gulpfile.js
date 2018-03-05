const gulp = require('gulp');
const concat = require('gulp-concat');
const config = require('./build.config.js');
const del = require('del');
const webpack = require('webpack');
const slang = require('gulp-slang');

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

gulp.task('scripts:sling', ['build-scripts'], () => {
    return gulp.src(config.paths.scripts.build)
        .pipe(slang());
});

gulp.task('styles:sling', ['build-styles'], () => {
    return gulp.src(config.paths.styles.build)
        .pipe(slang());
});

gulp.task('watch', () => {
    gulp.watch(config.paths.scripts.all, ['scripts:sling']);
    gulp.watch(config.paths.styles.all, ['styles:sling']);
});

gulp.task('default', ['build-scripts', 'build-styles']);
