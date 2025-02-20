/* Initialize modules (npm packages) 
 *
 * importing npm packages we installed as variables in our 
 * gulpfile so we have access to them */
const { src, dest, watch, series, parallel } = require('gulp'); 
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano'); 
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

// File path variables 
const files = { 
	scssPath: 'app/scss/**/*.scss',
	jsPath: 'app/js/**/*.js',
}

// -------------------------Gulp Tasks --------------------------

// Sass task
function scssTask() {
	return src(files.scssPath)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(postcss([ autoprefixer(), cssnano() ]))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('dist')
	);
}

// JS task
function jsTask(){
	return src(files.jsPath)
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(dest('dist')
	);
}

// Cachebusting task (so we don't have to clear cache everytime there's a css or js change)
const cbString = new Date().getTime();
function cacheBustTask(){
	return src(['index.html'])
		.pipe(replace(/cb=\d+/g, 'cb=' + cbString)) 
		.pipe(dest('.')
	);
}


// Watch task (automatically detect changes and rebuild files)
function watchTask(){
	watch([files.scssPath, files.jsPath], 
		parallel(scssTask, jsTask));
}

// Default task (gulp in command line) 
// this runs if we type in gulp
exports.default = series(
	parallel(scssTask, jsTask),
	cacheBustTask,
	watchTask
);