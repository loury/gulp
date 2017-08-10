var gulp = require('gulp'),//加载gulp
    gulpLoadPs = require('gulp-load-plugins')();//获取所有插件（不要忘记括号哦）
//htmlmin：压缩html文件
gulp.task('Thtmlmin',function(){
  var options = {
    removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    minifyJS: true,//压缩页面JS
    minifyCSS: true//压缩页面CSS
  };
  gulp.src('src/html/*.html')//定义任务操作的对象
        .pipe(gulpLoadPs.htmlmin(options))//调用插件
        .pipe(gulp.dest('dist/html'))
        .pipe(gulpLoadPs.livereload());
  });
//livereload：实时刷新页面
gulp.task('LReload', function() {
  gulp.src('src/**/*.*')//定义任务操作的对象
        .pipe(gulpLoadPs.livereload());//文件流传给livereload插件
    gulpLoadPs.livereload.listen();//调用livereload的api
    gulp.watch('src/**/*.*',['LReload']);//watch监听文件变化，包括src文件夹及其子文件夹里的内容
});
//brower sync：实时刷新页面
gulp.task('BReload',function(){
  
  })


