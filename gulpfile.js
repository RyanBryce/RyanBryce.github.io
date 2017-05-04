const gulp = require('gulp');
const concat = require('gulp-concat')
const babel = require('gulp-babel');
const sass = require('gulp-sass')

gulp.task('concat', () => {
  gulp.src(['./js/*.js'])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./dist'))
})
gulp.task('sass', function () {
  return gulp.src('./styles/*.sass')
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function(){
  gulp.watch('./styles/*.sass', ['sass']);
  gulp.watch('./js/*.js', ['concat']);
})
