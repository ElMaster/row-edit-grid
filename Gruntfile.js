'use strict';
module.exports = function (grunt) {

  grunt.initConfig({
    less: {

      production: {
        options: {
          compress: true
        },
        files: {
          'styles/style.min.css': 'styles/less/urban.less',
          'styles/style.skins.min.css': 'styles/less/urban.skins.less'
        }
      }
    },
   
  
    watch: {
      options: {
        livereload:true
      },
      scripts: {
        files: ['styles/**/*.less'],
        tasks: ['process']
      }
    }
  });

  // Load all grunt tasks

  // LESS Compiler
  grunt.loadNpmTasks('grunt-contrib-less');
  // Watch File Changes
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Compress JS Files
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Copy Files
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-newer');
  // The default task (running "grunt" in console) is "watch"

  grunt.registerTask('process', ['less']);
  grunt.registerTask('default', ['less', 'watch']);
};