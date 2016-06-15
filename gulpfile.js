var pkg = require('./package');

var gulp = require('gulp');

// 下面的模块才有`DefinePlugin`
var webpack = require('webpack');

// https://github.com/shama/webpack-stream
var webpackStream = require('webpack-stream');

// https://www.npmjs.com/package/gulp-rename/
var rename = require("gulp-rename");

// https://www.npmjs.com/package/gulp-uglify/
var uglify = require('gulp-uglify');

// https://www.npmjs.com/package/del
var del = require('del');

gulp.task('delete-dist-dir', function (cb) {
    del(['dist']).then(function () {
        cb();
    });
});

function pack() {
    return gulp.src('src/index.js').pipe(webpackStream({
        output: {
            // 不要配置path，会报错
            //path: 'dist',
            filename: 'salt-fetch.js',
            sourcePrefix: ''
            // 下面三个配置项说明`webpack`的最佳实战是: 只设置唯一的`entry`, 正好和`gulp`的约定完美对接
            // NOTE: 如果需要构建`umd`模块，则这三个配置项必须同时使用：library, libraryTarget, umdNamedDefine
            // library: 'SaltFetch',
            // libraryTarget: 'umd',
            // umdNamedDefine: true
        },
        module: {
        },
        externals: {
        }
    })).pipe(gulp.dest('./dist'));
}

gulp.task('pack', ['delete-dist-dir'], function() {
    return pack(false);
});

gulp.task('min', function () {
    return gulp.src([
        'dist/salt-fetch.js'
    ]).pipe(uglify()).pipe(rename(function (path) {
        console.log(path);
        path.basename += '.min';
    })).pipe(gulp.dest('./dist'));
});