/**
 * Created by cdchenjia on 2016/7/12.
 */
'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('gulp-webpack');
const del = require('del');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
const imagemin = require('gulp-imagemin');

//清空dist目录
gulp.task('clean', (cb) => {
    del([
        'dist/*'
    ], cb);
});

//合并压缩css
gulp.task('minify-css', () => {
    //index.css
    gulp.src(['src/css/base.css', 'src/css/nav.css', 'src/css/index.css'])
        .pipe(concat('index.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});


//图片压缩
gulp.task('imagemin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/i'))
);

//合并js,转es5
gulp.task('webpack', () => {
    gulp.src(['./src/js/index.js', './src/js/test.js'])
        .pipe(webpack({
            output: {
                filename: "index.js"
            }
        }))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/'))
});

gulp.task('watch', function () {
    gulp.watch('src/css/*.css', ['minify-css']);
});

gulp.task('default', ['clean', 'minify-css', 'imagemin', 'webpack', 'watch']);