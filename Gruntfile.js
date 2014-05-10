// This will generate dist/sandbox_dependencies.js with:
//   browserified version of sinon, chai and esprima-jquery-map
//   mocha testing library
//   mocha custom test runner

module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'source/javascripts/lib/modernizr-2.0.js',
          'source/javascripts/lib/jquery.js',
          'source/javascripts/lib/jquery.fancybox.pack.js',
          'source/javascripts/lib/jquery.fancybox-thumbs.js',
          'source/javascripts/lib/jquery.fancybox-buttons.js',
          'source/javascripts/lib/bootstrap.js',
          'source/javascripts/lib/jquery.unveil.min.js'
        ],
        dest: 'source/javascripts/vendor.js'
      },
    },
    watch: {
      scripts: {
        files: ['souce/javascripts/lib/*.js'],
        tasks: ['default']
      }
    }
  });

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // The default tasks to run when you type: grunt
  grunt.registerTask('default', ['concat']);
  grunt.registerTask('watch', ['watch']);
};
