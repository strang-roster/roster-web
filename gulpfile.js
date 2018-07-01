'use strict';

var gulp       = require('gulp'),
    ts         = require('gulp-typescript'),
    del        = require('del'),
    html2js    = require('gulp-html2js'),
    browserify = require("browserify"),
    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer');

var tsProject = ts.createProject("tsconfig.json");


const srcDir = './src/';
const tmpDir = './temp/';
const distDir = './dist/';
const staticDir = './dist/static/';

const tmpJsGlob = tmpDir + '**/**.js';

const srcGlob = srcDir + '**/**.ts';
const htmlGlob = srcDir + '*.html';
const cssGlob = srcDir + '**/**.css';
const imgGlob = srcDir + 'img/**/*.*';
const srcTestGlob = srcDir + '**/**.spec.ts';

// Removes temp and dist directories.
gulp.task('clean', ['clean-temp', 'clean-dist']);

gulp.task('clean-temp', function () {
  return del([tmpDir]);
});

gulp.task('clean-dist', function () {
  return del([distDir]);
});


gulp.task('bundle-css', ['clean'], function () {
  return  browserify({
        debug: true,
        paths: [
          'temp',
        ],
        transform: ['browserify-css'],
        entries: ['./src/css/css.js'],
    })
    .bundle()
    .pipe(source('css.js'))
    .pipe(buffer())
    .pipe(gulp.dest(staticDir));
});


// Browersifies TypeScript compiled files and HTML templates into a single JS
// bundle.js file.
gulp.task('bundle-js', ['build', 'bundle-css'], function () {
  return browserify({
        debug: true,
        paths: [
          'temp',
        ],
        entries: ['./temp/app.js'],
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest(staticDir));
});

// Build task compiles TypeScript and HTML templates into JS in the temp/js
// directory.
gulp.task('build', ['tsc', 'html2js'], function() {});

// Compiles TypeScript source files in src/ to temp/js directory.
gulp.task('tsc', ['clean'], function () {
  return gulp.src(srcGlob)
             .pipe(tsProject())
             .js.pipe(gulp.dest(tmpDir));
});

// Builds HTML template files into a joulia.templates Angular module at
// temp/joulia.js.
gulp.task('html2js', ['clean'], function () {
  return gulp.src('src/**/**.tpl.html')
             .pipe(html2js('templates.js', {
                 adapter: 'angular',
                 base: 'src',
                 name: 'app.templates'
             }))
             .pipe(gulp.dest(tmpDir));
});


gulp.task('bundle', ['bundle-js', 'bundle-css', 'copy']);


gulp.task('copy', ['copy-html']);

gulp.task('copy-html', ['clean'], function () {
  return gulp.src(htmlGlob)
             .pipe(gulp.dest(distDir));
})


gulp.task('default', ['bundle']);

gulp.task('watch', ['default'], function() {
  gulp.watch(srcDir + '**/*.*', ['default']);
});
