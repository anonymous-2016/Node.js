var gulp = require('gulp'),
    jade = require('gulp-jade'),
    browserify = require('gulp-browserify'),
    uglify= require('gulp-uglify'),
    gulpif= require('gulp-if'),
    sass= require('gulp-sass'),
    connect= require('gulp-connect'),
    express= require('express'),
    browserSync = require('browser-sync').create();

var env = process.env.NODE_ENV;
// var env = process.env.NODE_ENV || 'production';
// var env = process.env.NODE_ENV || 'development';

var outputDir = 'builds/development';
//var outputDir = 'builds/app';
gulp.task('jade',function(){
    return gulp.src('src/template/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest(outputDir))
        .pipe(connect.reload());
        // .pipe(gulp.dest('builds/development'));
});

gulp.task('js',function(){
    return gulp.src('src/js/main.js')
        .pipe(browserify({ debug: env === 'development'}))
        .pipe(gulpif(env === 'production', uglify()))
        // .pipe(uglify())
        .pipe(gulp.dest(outputDir + '/js'))
        .pipe(connect.reload());
        // .pipe(gulp.dest('builds/development/js'));
});

gulp.task('ts',function(){
    return gulp.src('src/ts/*.ts')
        .pipe(browserify({ debug: env === 'development'}))
        .pipe(gulpif(env === 'production', uglify()))
        // .pipe(uglify())
        .pipe(gulp.dest(outputDir + '/js'))
        .pipe(connect.reload());
        // .pipe(gulp.dest('builds/development/js'));
});

gulp.task('sass',function(){
    var config = {};
    if (env === 'development') {
        config.sourceComments = 'map';
    }
    if(env === 'production'){
        config.outputStyle = 'compressed';
    }
    return gulp.src('src/sass/*.scss')
        // .pipe(sass({ sourceComments: 'map'}))
        .pipe(sass(config))
        .pipe(gulp.dest(outputDir + '/css'))
        .pipe(connect.reload());
        // .pipe(gulp.dest('builds/development/css'));
});


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./builds/"
            // root dir (baseDir: "./")
        }
    });
});

gulp.task('connect',function(){
    connect.server({
        root: [outputDir],
        port: 8080,
        livereload: true,
        // open: { browser: 'Google Chrome'}
    });
});

gulp.task('watch',function(){
    gulp.watch('src/template/**/*.jade',['jade']);
    gulp.watch('src/js/**/*.js',['js']);
    gulp.watch('src/ts/**/*.js',['ts']);
    gulp.watch('src/sass/**/*.scss',['sass']);
});

gulp.task('default',['js','ts','sass','jade','watch','connect','browser-sync']);