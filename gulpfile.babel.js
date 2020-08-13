const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const pug = require('gulp-pug');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');

/* imports postCss */
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const zIndex = require('postcss-zindex');
const pseudoelements = require('postcss-pseudoelements');
const nthChild = require('postcss-nth-child-fix');
const browserSync = require('browser-sync');
const browserify = require('gulp-browserify');

const server = browserSync.create();

const sassOptionsDev = {
	includePaths: ['node_modules'],
	sourceComments: true,
	outputStyle: 'expanded',
};

const sassOptionsProd = {
	includePaths: ['node_modules'],
	outputStyle: 'compressed',
	sourceComments: false,
};

const postCssPlugins = [
	autoprefixer({
		browsersList: ['last 3 versions'],
	}),
	zIndex(),
	pseudoelements(),
	nthChild(),
];

gulp.task('stylesDev', () => {
	return gulp
		.src('./dev/scss/index.scss')
		.pipe(plumber())
		.pipe(sass(sassOptionsDev))
		.pipe(postcss(postCssPlugins))
		.pipe(gulp.dest('./public/css/'))
		.pipe(server.stream());
});

gulp.task('stylesProd', () => {
	return gulp
		.src('./dev/scss/index.scss')
		.pipe(plumber())
		.pipe(sass(sassOptionsProd))
		.pipe(postcss(postCssPlugins))
		.pipe(gulp.dest('./public/css/'))
		.pipe(server.stream());
});

gulp.task('pug', () => {
	return gulp
		.src('./dev/pug/layout/index.pug')
		.pipe(plumber())
		.pipe(
			pug({
				pretty: true,
			})
		)
		.pipe(gulp.dest('./public/'));
});

gulp.task('babel', () => {
	return (
		gulp
			.src('./dev/js/scripts.js')
			.pipe(plumber())
			.pipe(
				browserify({
					transform: ['babelify'],
				})
			)
			/*.pipe(
            babel({
                presets: ["@babel/preset-env"],
            })
        )*/
			.pipe(gulp.dest('./public/js/'))
	);
});

gulp.task('img', () => {
	return gulp
		.src('./dev/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./public/img'));
});

gulp.task('uglify', () => {
	return gulp
		.src('./public/js/scripts.js')
		.pipe(uglify())
		.pipe(gulp.dest('./public/js/'));
});

gulp.task('default', () => {
	server.init({
		server: './public',
	});

	//gulp stylesProd  /*Produccion*/
	//gulp uglify  /*Produccion*/

	gulp.watch('./dev/pug/**/*.pug', gulp.series('pug')).on(
		'change',
		server.reload
	);
	gulp.watch('./dev/scss/**/*.scss', gulp.series('stylesDev')).on(
		'change',
		server.reload
	);
	gulp.watch('./dev/js/**/*.js', gulp.series('babel')).on(
		'change',
		server.reload
	);
	gulp.watch('./dev/img/*').on('add', gulp.series('img'));
});
