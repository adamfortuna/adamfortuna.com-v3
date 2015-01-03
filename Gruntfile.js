// This will generate dist/sandbox_dependencies.js with:
//   browserified version of sinon, chai and esprima-jquery-map
//   mocha testing library
//   mocha custom test runner

module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      vendor: {
        options: {
          separator: ';',
        },
        src: [
          'source/javascripts/lib/modernizr-2.0.js',
          'source/javascripts/lib/jquery.js',
          'source/javascripts/lib/photoswipe.min.js',
          'source/javascripts/lib/photoswipe-ui-default.min.js',
          'source/javascripts/lib/bootstrap.js',
          'source/javascripts/lib/jquery.unveil.min.js'
        ],
        dest: 'source/javascripts/vendor.js'
      },
      books: {
        options: {
          separator: ';',
        },
        src: [
          'source/javascripts/lib/handlebars-1.0.0.js',
          'source/javascripts/lib/ember-1.1.2.js',
          'source/javascripts/lib/ember-data.js',
          'source/javascripts/lib/moment.js',
          'source/javascripts/lib/markdown.min.js',
          'source/javascripts/app.js',
          'source/javascripts/books.js'
        ],
        dest: 'source/javascripts/books-min.js'
      }
    },
    watch: {
      scripts: {
        files: ['souce/javascripts/lib/*.js', 'souce/javascripts/*.js'],
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
