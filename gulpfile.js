const gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  imagemin = require('gulp-imagemin'),
  svgStore = require('gulp-svgstore'),
  rename = require('gulp-rename'),
  uglifyCss = require('gulp-uglifycss'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  es = require('event-stream'),
  cp = require('child_process'),
  realFavicon = require('gulp-real-favicon'),
  fs = require('fs'),
  sequence = require('gulp-sequence')

const paths = {
  styles: {
    src: '_src/styles/styles.scss',
    dest: 'assets/styles',
    watch: '_src/styles/**/*.scss',
    vendor: [
      'bower_components/flickity/dist/flickity.css',
      'bower_components/flatpickr/dist/flatpickr.dark.min.css'
    ]
  },
  images: {
    src: '_src/images/**/*.{jpg,gif,png,svg}',
    srcSvg: ['!_src/images/favicon.svg', '_src/images/**/*.svg'],
    dest: 'assets/images',
    watch: '_src/images/**/*.{jpg,gif,png,svg}'
  },
  content: {
    watch: ['./*.md', './*.html', '_includes/*', '_layouts/*']
  },
  js: {
    src: [
      'bower_components/flickity/dist/flickity.pkgd.js',
      'bower_components/flatpickr/dist/flatpickr.min.js',
      '_src/scripts/gallery.js',
      '_src/scripts/booking.js',
      '_src/scripts/images.js'
    ],
    dest: 'assets/scripts',
    watch: '_src/scripts/**/*.js'
  }
}

gulp.task('js', function () {
  return gulp.src(paths.js.src)
    .pipe(concat('bt1.js'))
    .pipe(babel({presets: ['@babel/preset-env']}))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.dest))
})

gulp.task('styles', function () {
  const sassPipeline = gulp.src(paths.styles.src).pipe(sass()),
    vendorPipeline = gulp.src(paths.styles.vendor)

  return es.concat(sassPipeline, vendorPipeline)
    .pipe(concat('styles.css'))
    .pipe(autoprefixer({browsers: ['last 5 versions']}))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglifyCss())
    .pipe(gulp.dest('_site/' + paths.styles.dest))
    .pipe(gulp.dest(paths.styles.dest))
})

gulp.task('images', ['svg-sprite'], function () {
  return processImages(gulp.src(paths.images.src))
})

gulp.task('svg-sprite', function () {
  return gulp.src(paths.images.srcSvg)
    .pipe(imagemin())
    .pipe(svgStore())
    .pipe(gulp.dest('_includes'))
})

gulp.task('jekyll-build', ['styles', 'images', 'js'], function (done) {
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'}).on('close', done)
})

function processImages (src) {
  return src
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest))
}

// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
gulp.task('generate-favicon', function (done) {
  realFavicon.generateFavicon({
    masterPicture: '_src/images/favicon.svg',
    dest: './',
    iconsPath: '/',
    design: {
      ios: {
        pictureAspect: 'backgroundAndMargin',
        backgroundColor: '#4b6a90',
        margin: '4%',
        assets: {
          ios6AndPriorIcons: false,
          ios7AndLaterIcons: false,
          precomposedIcons: false,
          declareOnlyDefaultIcon: true
        }
      },
      desktopBrowser: {},
      windows: {
        pictureAspect: 'noChange',
        backgroundColor: '#4b6a90',
        onConflict: 'override',
        assets: {
          windows80Ie10Tile: false,
          windows10Ie11EdgeTiles: {
            small: false,
            medium: true,
            big: false,
            rectangle: false
          }
        }
      },
      androidChrome: {
        pictureAspect: 'backgroundAndMargin',
        margin: '0%',
        backgroundColor: '#ffffff',
        themeColor: '#ffffff',
        manifest: {
          name: 'BT One',
          display: 'standalone',
          orientation: 'notSet',
          onConflict: 'override',
          declared: true
        },
        assets: {
          legacyIcon: false,
          lowResolutionIcons: false
        }
      },
      safariPinnedTab: {
        pictureAspect: 'silhouette',
        themeColor: '#ffffff'
      }
    },
    settings: {
      scalingAlgorithm: 'Mitchell',
      errorOnImageTooSmall: false
    },
    markupFile: 'faviconData.json'
  }, function () {
    done()
  })
})

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
gulp.task('inject-favicon-markups', function () {
  return gulp.src('_includes/head.html')
    .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync('faviconData.json')).favicon.html_code))
    .pipe(gulp.dest('_includes'))
})

gulp.task('favicons', sequence('generate-favicon', 'inject-favicon-markups'))

gulp.task('default', ['jekyll-build'])
gulp.task('watch', ['default'], function () {
  gulp.watch(paths.styles.watch, ['styles'])
  gulp.watch(paths.images.watch, ['images'])
  gulp.watch(paths.js.watch, ['js'])
//  gulp.watch(paths.content.watch, ['jekyll-build'])
})

gulp.task('serve', ['watch'], function () {
  return cp.spawn('jekyll', ['serve'], {stdio: 'inherit'})
})
