const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.default = defaultTask

gulp.task('sass', function() {
    return gulp.src('styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets'))
});

gulp.task('watch', function() {
    gulp.watch('styles/**/*.scss', gulp.series('sass'));
})