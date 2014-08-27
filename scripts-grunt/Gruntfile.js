module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Concat task config.
    concat: {
      dev: {
        src: 'src/*.js',
        dest: 'build/main.js'
      },
      prod: {
        src: 'src/*.js',
        dest: 'temp/main.js'
      },
    },
    // Uglify task config.
    uglify: {
      prod: {
        src: 'temp/main.js',
        dest: 'build/main.js'
      }
    },
    // Clean task config.
    clean: [
      "temp/*.js",
      "build/*.js"
    ]
  });

  // Load tasks installed via npm.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Define our own tasks.
  grunt.registerTask('default', ['concat:dev']);
  grunt.registerTask('build', ['clean', 'concat:prod', 'uglify']);
};
