/**
 * Created by ramosy on 2016/6/23.
 */

var gulp = require('gulp');
var less = require('gulp-less');//less编译器
var cssmin = require('gulp-minify-css');//压缩css插件
var sourcemaps = require('gulp-sourcemaps');//编译后不容易找到对应less文件,sourcemap文件，方便修改
var notify = require('gulp-notify'),plumber = require('gulp-plumber');//当发生异常时提示错误,不终止gulp-less的watch任务
gulp.task('bootstrap', function () {
    console.log("正在编译less....");
    return gulp.src('node_modules/bootstrap/less/bootstrap.less')
        .pipe(sourcemaps.init())
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('client/css'));
});
gulp.task('less', function () {
    console.log("正在编译less....");
    return gulp.src('client/less/style.less')
        .pipe(sourcemaps.init())
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('client/css'));
});

gulp.task('watch', function () {
    gulp.watch('client/**/*.less', ['less']); //当所有less文件发生改变时，调用less任务
});

gulp.task('default', ['bootstrap']);

/*'client/less/style.less',*/