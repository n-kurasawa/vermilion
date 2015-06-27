var gulp = require('gulp');
var plumber  = require('gulp-plumber')
var concat  = require('gulp-concat')
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var stylus  = require('gulp-stylus')
var nib = require('nib');

gulp.task('js', function() {
  return browserify({
      entries:['./src/js/components/App.jsx'],
      extensions:['js', 'jsx']
  })
  .transform(babelify)
  .bundle()
  .on('error', function(err){
    console.log(err);
    this.emit('end');
  })
  .pipe(source('app.js'))
  .pipe(gulp.dest('./public/js'));
});

gulp.task('css', function(argument) {
  return gulp.src('./src/stylus/*.styl')
      .pipe(plumber())
      .pipe(stylus( {use: [nib()]}))
      .pipe(gulp.dest('public/css'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch("./src/js/**/*.jsx", ['js']);
  gulp.watch("./src/js/**/*.js", ['js']);
  gulp.watch("./src/stylus/**/*.styl", ['css']);
});

gulp.task('build', ['js', 'css']);
gulp.task('default', ['watch']);
