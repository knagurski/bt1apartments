var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    imagemin     = require('gulp-imagemin'),
    svg2png      = require('gulp-svg2png'),
    svgStore     = require('gulp-svgstore'),
    modulizr     = require('gulp-modulizr'),
    rename       = require('gulp-rename'),
    uglifyCss    = require('gulp-uglifyCss'),
    uglify       = require('gulp-uglify'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    es           = require('event-stream'),
    cp           = require('child_process');

var paths = {
    styles: {
        src: '_src/styles/styles.scss',
        dest: 'assets/styles',
        watch: '_src/styles/**/*.scss',
        vendor: 'bower_components/flickity/dist/flickity.css'
    },
    images: {
        src: '_src/images/**/*.{jpg,gif,png,svg}',
        srcSvg: '_src/images/**/*.svg',
        dest: 'assets/images',
        watch: '_src/images/**/*.{jpg,gif,png,svg}'
    },
    content: {
        watch: ['*.md', '*.html', '_includes/*', '_layouts/*']
    },
    js: {
        src: [
            'bower_components/flickity/dist/flickity.pkgd.js',
            'bower_components/feature.js/feature.js',
            '_src/scripts/gallery.js'
        ],
        dest: 'assets/scripts',
        watch: '_src/scripts/**/*.js'
    }
};

gulp.task('js', function () {
    return gulp.src(paths.js.src)
        .pipe(concat('bt1.js'))
        .pipe(gulp.dest(paths.js.dest))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(paths.js.dest));
});

gulp.task('styles', function () {
    var sassPipeline   = gulp.src(paths.styles.src).pipe(sass()),
        vendorPipeline = gulp.src(paths.styles.vendor);

    return es.concat(sassPipeline, vendorPipeline)
        .pipe(concat('styles.css'))
        .pipe(autoprefixer({browsers: ['last 5 versions']}))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglifyCss())
        .pipe(gulp.dest('_site/' + paths.styles.dest))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('images', ['images-svg', 'svg-sprite'], function () {
    return processImages(gulp.src(paths.images.src));
        //.pipe(browserSync.reload());
});

gulp.task('images-svg', function () {
    return processImages(
        gulp.src(paths.images.srcSvg)
            .pipe(svg2png())
    );
});

gulp.task('svg-sprite', function(){
    return gulp.src(paths.images.srcSvg)
        .pipe(imagemin())
        .pipe(svgStore())
        .pipe(gulp.dest('_includes'));
})

gulp.task('jekyll-build', ['styles', 'images', 'js'], function (done) {
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
            .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function(){
    browserSync.reload();
});

gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site',
            browser: 'google chrome'
        }
    });
});

function processImages(src) {
    return src.pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}

gulp.task('default', ['browser-sync', 'watch']);
gulp.task('watch', function () {
    gulp.watch(paths.styles.watch, ['styles']);
    gulp.watch(paths.images.watch, ['images']);
    gulp.watch(paths.js.watch, ['js']);
    gulp.watch(paths.content.watch, ['jekyll-rebuild']);
});