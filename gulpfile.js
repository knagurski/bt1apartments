var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    imagemin     = require('gulp-imagemin'),
    svg2png      = require('gulp-svg2png'),
    modulizr     = require('gulp-modulizr'),
    rename       = require('gulp-rename'),
    uglifyCss    = require('gulp-uglifyCss'),
    sass         = require('gulp-sass');

var paths = {
    styles: {
        src: 'src/styles/styles.scss',
        dest: 'public/assets/styles',
        watch: 'src/styles/**/*.scss'
    },
    images: {
        src: 'src/images/**/*.{jpg,gif,png,svg}',
        srcSvg: 'src/images/**/*.svg',
        dest: 'public/assets/images',
        watch: 'src/images/**/*.{jpg,gif,png,svg}'
    }
};

gulp.task('styles', function () {
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(autoprefixer({browsers: ['last 5 versions']}))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglifyCss())
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('images', ['images-svg'], function () {
    return processImages(gulp.src(paths.images.src));
});

gulp.task('images-svg', function () {
    return processImages(
        gulp.src(paths.images.srcSvg)
            .pipe(svg2png())
    );
});

function processImages(src) {
    return src.pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}

gulp.task('default', ['styles', 'images']);
gulp.task('watch', ['default'], function () {
    gulp.watch(paths.styles.watch, ['styles']);
    gulp.watch(paths.images.watch, ['images']);
});