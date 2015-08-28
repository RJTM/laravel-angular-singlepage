var gulp = require('gulp'),
      plugins = require('gulp-load-plugins')(),
      browserSync = require('browser-sync').create();

var gulp_src = gulp.src;
      gulp.src = function() {
      	return gulp_src.apply(gulp, arguments)
      	.pipe(plugins.plumber(function(error) {
            // Output an error message
            plugins.util.log(plugins.util.colors.red('Error (' + error.plugin + '): ' + error.message));
            // emit the end event, to properly end the task
            this.emit('end');
        })
      	);
      };

var paths = {
	less: './public/assets/stylesheets/app.less',
	js: './public/assets/js/**/*.js',
	html: 'public/assets/js/**/*.html',
	dependencies: [
		'./public/assets/vendor/angular/angular.js',
		'./public/assets/vendor/angular-bootstrap/ui-bootstrap-tpls.js',
		'./public/assets/vendor/sweetalert/dist/sweetalert-dev.js',
		'./public/assets/vendor/angular-scroll/angular-scroll.js',
		'./public/assets/vendor/angular-ui-router/release/angular-ui-router.js',
		'./public/assets/vendor/api-check/dist/api-check.js',
		'./public/assets/vendor/angular-formly/dist/formly.js',
		'./public/assets/vendor/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.js',
		
	]
};

gulp.task('less', function(){
	return gulp.src(paths.less)
		.pipe(plugins.less())
		.pipe(plugins.autoprefixer({
		            browsers: ['last 2 versions'],
		            cascade: false
		        }))
		.pipe(gulp.dest('./public/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('inject', function(){
	return gulp.src('./resources/views/index.php')
		.pipe(plugins.inject(gulp.src(paths.dependencies, {read: false}), {name: 'dependencies', ignorePath: '/public'}))
		.pipe(plugins.inject(gulp.src(paths.js).pipe(plugins.angularFilesort()), {ignorePath: '/public'}))
		.pipe(gulp.dest('./resources/views'));
});

gulp.task('watch-js', ['inject'], function(){
	browserSync.reload();
});

gulp.task('reload', function(){
	browserSync.reload();
});

gulp.task('watch', function(){
	gulp.watch(paths.less, ['less']);
	gulp.watch(paths.js.substring(2), ['watch-js']);
	gulp.watch(paths.html, ['reload']);
	gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "eva.web"
    });
});

gulp.task('default', ['browser-sync', 'less', 'inject', 'watch']);

gulp.task('minifyJS', function(){
	gulp.src(paths.dependencies.concat(paths.js))
		.pipe(plugins.concat('app.js'))
		.pipe(plugins.ngAnnotate())
		.pipe(plugins.uglify())
		.pipe(gulp.dest('./public/js'));
});

gulp.task('buildLESS', function(){
	return gulp.src(paths.less)
		.pipe(plugins.less())
		.pipe(plugins.autoprefixer({
		            browsers: ['last 2 versions'],
		            cascade: false
		        }))
		.pipe(plugins.minifyCss({
			processImport : false
		}))
		.pipe(gulp.dest('./public/css'))
});

gulp.task('injectBuild', function(){
	return gulp.src('./resources/views/index.php')
		.pipe(plugins.inject(gulp.src('./public/js/app.js', {read: false}), { ignorePath: '/public'}))
		.pipe(gulp.dest('./resources/views'));
});

gulp.task('build', ['minifyJS', 'buildLESS', 'injectBuild']);