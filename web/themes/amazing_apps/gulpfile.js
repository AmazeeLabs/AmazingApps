const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync');
const sourceMaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const create = require('@frctl/fractal').create;
const twigAdapter = require('@wondrousllc/fractal-twig-drupal-adapter');

const fractal = create();

// Configure fractal to use twig instead of handlebars.
const twig = twigAdapter({
  // Use the same components handle as the GraphQL Twig template loader.
  handlePrefix: '#',
});

fractal.components.engine(twig);
fractal.components.set('ext', '.twig');


// The project title.
fractal.set('project.title', 'Amazing Apps');

// Source folders.
fractal.docs.set('path', __dirname + '/docs');
fractal.components.set('path', __dirname + '/components');

// This folder will contain the compiled assets, used by Drupal.
fractal.web.set('static.path', __dirname + '/dist');

// This is the target folder for the fractal build process.
fractal.web.set('builder.dest', __dirname + '/build');

// The preview component initialises any global assets.
fractal.components.set('default.preview', '#preview');

// Use fractals cli logger.
const logger = fractal.cli.console;

// Build fractal as a static library.
gulp.task('fractal:build', ['default'], function() {
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal build completed!');
  });
});

// Start the fractal development server.
gulp.task('fractal:start', ['default'], function() {
  const server = fractal.web.server({
    sync: true
  });
  server.on('error', function (err)  {
    logger.error(err.message);
  });

  return server.start().then(function () {
    logger.success(`Fractal server is now running at ${server.url}`);
  });
});


// Process component style sheets.
gulp.task('styles', function () {
  return gulp
    .src([
      'components/**/*.css',
    ])
    .pipe(sourceMaps.init())
    .pipe(concat('styles.css'))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
});


// Watch CSS files for changes.
gulp.task('watch', function () {
  watch('components/**/*.css', function() {
    return gulp.start('styles');
  });
});

// Default task builds styles only.
gulp.task('default', function () {
  return gulp.start('styles');
});

// Build the whole library.
gulp.task('build', ['styles'], function () {
  return gulp.start('fractal:build');
});

// Start the development server for the pattern library.
gulp.task('serve', function ()  {
  return gulp.start('fractal:start', 'watch');
});
