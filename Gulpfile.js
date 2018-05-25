var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpImport = require('gulp-html-import');
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('styles', function() {
    gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});


gulp.task('import', function () {
    gulp.src('html/index.html')
        .pipe(gulpImport('html/components/'))
        .pipe(gulp.dest('./')); 
});
 




gulp.task('browser-sync',  function (done) {
    browserSync.reload();
    done();
});



//Watch task
gulp.task('default',function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        ghostMode: false,
    });
    gulp.watch('scss/**/*.scss',['styles']);
    gulp.watch('html/**/*.html',['import']);
    gulp.watch("html/**/*.html", ['browser-sync']);
    gulp.watch("css/**/*.css", ['browser-sync']);
    gulp.watch("js/**/*.js", ['browser-sync']);


}); 