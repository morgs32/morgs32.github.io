module.exports = function(grunt) {



  grunt.initConfig({
    copy: {
      main: {
        src: 'index.html',
        dest: '_index.html',
      },
      archive: {
        src: '_index.html',
        dest: './html/index.' + new Date().getTime() + '.html',
      },
      restore: {
        src: '_index.html',
        dest: 'index.html',
      },
    },
    clean: ["_index.html"],
    vulcanize: {
      default: {
        options: {
          strip: true
          // Task-specific options go here.
        },
        files: {
          'index.html': 'index.html'
        },
      },
    },
  })

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-vulcanize');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');


  grunt.registerTask('build', 'Building...', function() {
    if (grunt.file.exists('_index.html')) {
      grunt.fail.warn('You have to run grunt alone first!');
    }
    else {
      grunt.task.run(['copy:main', 'vulcanize']);
    }
  });
  grunt.registerTask('default', ['copy:restore', 'clean']);

};
