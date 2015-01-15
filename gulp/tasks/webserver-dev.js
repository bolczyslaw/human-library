'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver-dev', ['inject', 'templates', 'assets', 'assets-bower', 'glyphiconfont'], function() {
  gulp.src('./dev/')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
