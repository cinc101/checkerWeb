/**
 * Created by cdchenjia on 2016/7/12.
 */
'use strict';

const path = require("path");
const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('gulp-webpack');
const del = require('del');

gulp.task('clean', (cb) => {
    del([
        'dist/*'
    ], cb);
});

gulp.task('index-wp', () => {
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

gulp.task('default', ['clean', 'index-wp']);