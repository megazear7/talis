const gulp = require('gulp');
const concat = require('gulp-concat');
const config = require('./build.config.js');

gulp.task('build-scripts', () => {
    return gulp.src(config.paths.scripts.src)
       .pipe(concat('build.js'))
       .pipe(gulp.dest(config.paths.scripts.dest));
});

gulp.task('default', ['build-scripts']);
