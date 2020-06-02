import gulp from "gulp"
import sass from "gulp-dart-sass"
import pug from "gulp-pug"
import babel from "gulp-babel"
import uglify from "gulp-uglify"
import plumber from "gulp-plumber"
import imagemin from "gulp-imagemin"

/* imports postCss */
import postcss from "gulp-postcss"
import autoprefixer from "autoprefixer"
import zIndex from "postcss-zindex"
import pseudoelements from "postcss-pseudoelements"
import nthChild from "postcss-nth-child-fix"

import browserSync from "browser-sync"
import browserify from "gulp-browserify"

const server = browserSync.create()


const sassOptionsDev = {
    includePaths: ["node_modules"],
    sourceComments: true,
    outputStyle: "expanded",
}

const sassOptionsProd = {
    includePaths: ["node_modules"],
    outputStyle: "compressed",
    sourceComments: false
}

const postCssPlugins = [
    autoprefixer({
        browsersList: ["last 3 versions"],
    }),
    zIndex(),
    pseudoelements(),
    nthChild()
]

gulp.task("stylesDev", () => {
    return gulp
        .src("./dev/scss/index.scss")
        .pipe(plumber())
        .pipe(sass(sassOptionsDev))
        .pipe(postcss(postCssPlugins))
        .pipe(gulp.dest("./public/css/"))
        .pipe(server.stream())
})

gulp.task("stylesProd", () => {
    return gulp
        .src("./dev/scss/index.scss")
        .pipe(plumber())
        .pipe(sass(sassOptionsProd))
        .pipe(postcss(postCssPlugins))
        .pipe(gulp.dest("./public/css/"))
        .pipe(server.stream())
})

gulp.task("pug", () => {
    return gulp
        .src("./dev/pug/layout/index.pug")
        .pipe(plumber())
        .pipe(
            pug({
                pretty: true,
            }),
        )
        .pipe(gulp.dest("./public/"))
})

gulp.task("babel", () => {
    return gulp
        .src("./dev/js/scripts.js")
        .pipe(plumber())
        .pipe(browserify({
            transform: ["babelify"],
        }))
        /*.pipe(
            babel({
                presets: ["@babel/preset-env"],
            })
        )*/
        .pipe(gulp.dest("./public/js/"))
})

gulp.task("img", () => {
    return gulp
        .src("./dev/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./public/img"))

})

gulp.task("uglify", () => {
    return gulp
        .src("./public/js/scripts.js")
        .pipe(uglify())
        .pipe(gulp.dest("./public/js/"))

})

gulp.task("default", () => {
    server.init({
        server: "./public",
    })

    //gulp stylesProd  /*Produccion*/
    //gulp uglify  /*Produccion*/

    gulp.watch("./dev/pug/**/*.pug", gulp.series("pug")).on("change", server.reload)
    gulp.watch("./dev/scss/**/*.scss", gulp.series("stylesDev")).on("change", server.reload)
    gulp.watch("./dev/js/**/*.js", gulp.series("babel")).on("change", server.reload)
    gulp.watch("./dev/img/*").on("add", gulp.series("img"))
})