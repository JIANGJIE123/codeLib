/* eslint no-console: ["error", { allow: ["log"] }] */
const gulp = require('gulp');
const connect = require('gulp-connect');
const gopen = require('gulp-open');
const modifyFile = require('gulp-modify-file');

const buildJs = require('./build-js.js');
const buildLess = require('./build-less.js');

// Tasks
gulp.task('playground', (cb) => {
  const env = process.env.NODE_ENV || 'development';
  gulp.src('./playground/index.html')
    .pipe(modifyFile((content) => {
      if (env === 'development') {
        return content
          .replace('../dist/css/swiper.min.css', '../build/css/swiper.css')
          .replace('../dist/lib/swiper.min.lib', '../build/lib/swiper.lib');
      }
      return content
        .replace('../build/css/swiper.css', '../dist/css/swiper.min.css')
        .replace('../build/lib/swiper.lib', '../dist/lib/swiper.min.lib');
    }))
    .pipe(gulp.dest('./playground/'))
    .on('end', () => {
      if (cb) cb();
    });
});
gulp.task('lib', (cb) => {
  buildJs(cb);
});

gulp.task('less', (cb) => {
  buildLess(cb);
});

gulp.task('build', ['js', 'less']);

gulp.task('watch', () => {
  gulp.watch('./src/**/**/*.lib', ['lib']);
  gulp.watch('./src/**/**/*.less', ['less']);
});

gulp.task('connect', () => {
  connect.server({
    root: ['./'],
    livereload: true,
    port: '3000',
  });
});

gulp.task('open', () => {
  gulp.src('./playground/index.html').pipe(gopen({ uri: 'http://localhost:3000/playground/' }));
});

gulp.task('server', ['watch', 'connect', 'open']);

gulp.task('default', ['server']);
