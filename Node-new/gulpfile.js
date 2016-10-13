var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./builds"
            // root dir (baseDir: "./")
        }
    });
});