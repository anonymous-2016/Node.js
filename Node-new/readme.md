# node.js

## package.json
```json

npm install --save-dev gulp gulp-sass gulp-if gulp-uglify gulp-jade 

npm install --save-dev gulp-connect gulp-browserify

npm install --save-dev browser-sync

npm install --save-dev express connect

npm install --save-dev browserify uglify babel?

``` 
> [https://www.browsersync.io/docs/gulp](https://www.browsersync.io/docs/gulp)

> [https://www.browsersync.io/docs/api](https://www.browsersync.io/docs/api)

> [https://www.browsersync.io/docs/options](https://www.browsersync.io/docs/options)


## connect && express (web framework)


## mongoDB && mongoose && redia (DataBase)


## mocha (Testing)

```sh
$ npm install (package.json dependences)


$ npm init -y (yes) ???????
``` 

> ////////////////////////////////////////////

## https://www.browsersync.io/docs/gulp

```sh   
$ npm install browser-sync gulp --save-dev

``` 
## gulpfile.js
```js
    var gulp = require('gulp');
    var browserSync = require('browser-sync').create();
    //
    var sass = require('gulp-sass');

    // Static Server
    gulp.task('browser-sync', function() {
        browserSync.init({
            server: {
                baseDir: "./"
            }
        });
    });

    // Static Server + watching scss/html files
    gulp.task('server',['sass'], function() {
        browserSync.init({
            server: "./app"
        });
        gulp.watch("app/scss/*.scss",['sass']);
        gulp.watch("app/*.html").on('change', browserSync.reload);
    });

    // Compile sass into CSS & auto-inject into browsers
	gulp.task('sass', function() {
        return gulp.src("app/scss/*.scss")
            .pipe(sass())
            .pipe(gulp.dest("app/css"))
            .pipe(browserSync.stream());
    });

    gulp.task('default', ['serve']);
``` 
> or

```js
	var gulp = require('gulp');
	var browserSync = require('browser-sync').create();

	gulp.task('browser-sync', function() {
	    browserSync.init({
	        proxy: "yourlocal.dev"
	    });
	});
``` 



> ? src 编译生成 builds 下的目录，文件













