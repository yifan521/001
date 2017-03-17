var gulp = require('gulp');
		minify=require('gulp-minify-html');
gulp.task('myhtml',function() {
	gulp.src('*.html')
     .pipe(minify())
     .pipe(gulp.dest('aa'))
}); 
gulp.task('default',['myhtml']); 

var gulp = require('gulp'),
    minify=require('gulp-minify-css');

gulp.task('mycss',function(){
     gulp.src('css/*.css')
     .pipe(minify())
     .pipe(gulp.dest('bb'))
});

gulp.task('default',['mycss']); 