var gulp = require('gulp');
var htmlMinify = require('gulp-minify-html');
var ts = require("gulp-typescript");

var destinationFolder = 'dist';

gulp.task('default', ['html', 'ts'], function () {
	//
});

gulp.task('html', function () {
	return gulp.src('app/index.html')
				.pipe(htmlMinify())
			   	.pipe(gulp.dest(destinationFolder));
});

gulp.task('ts', function () {
	var tsProject = ts.createProject('tsconfig.json');
	var tsResult = tsProject.src().pipe(ts(tsProject));

	return tsResult.js
		// .pipe(concat('all.js'))
	    // .pipe(ugly())
	    .pipe(gulp.dest(destinationFolder));	
});


gulp.task('watch', ['html', 'ts'], function () {
	gulp.watch('app/*.ts', ['ts']);
	gulp.watch('app/index.html', ['html']);
});