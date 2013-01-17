/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>'
    },
    //lint: {
    //  files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    //},
    //qunit: {
    //  files: ['test/**/*.html']
    //},
    concat: {
      dist: {
        //src: ['<banner:meta.banner>', '<file_strip_banner:js/*.js>'],
        //dest: 'dist/<%= pkg.name %>.js'

        src: [  '<banner:meta.banner>',
                'js/vendor/jquery-1.9.0.min.js', 
                'js/vendor/jquery-migrate-1.0.0.min.js', 
                'js/vendor/jquery.pulse.min.js', 
                'js/vendor/bootstrap.min.js', 
                'js/helpers.js', 
                'js/webforms.js'],
        dest: 'dist/js/build.js'
      }
    },
    min: {
      dist: {
        //src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        //dest: 'dist/<%= pkg.name %>.min.js'
        src: ['dist/js/build.js'],
        dest: 'dist/js/build.min.js'       
      }
    },
    //watch: {
    //  files: '<config:lint.files>',
    //  tasks: 'lint qunit'
    //},
    //jshint: {
    //  options: {
    //    curly: true,
    //    eqeqeq: true,
    //    immed: true,
    //    latedef: true,
    //    newcap: true,
    //    noarg: true,
    //    sub: true,
    //    undef: true,
    //    boss: true,
    //    eqnull: true,
    //    browser: true
    //  },
    //  globals: {}
    //},
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'concat min');

};