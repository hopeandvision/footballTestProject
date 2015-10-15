
var gulp = require("gulp"),
    sass = require("gulp-sass")

// Styles task
// Uglify css
gulp.task("styles", function(){
    gulp.src("app/css/**/*.sass")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("build/css"))
});

// Watch task
// Watches sass
gulp.task("watch", function(){
    gulp.watch("app/css/**/*.sass", ["styles"]);
});

gulp.task("default", ["styles", "watch"]);