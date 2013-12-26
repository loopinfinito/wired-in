module.exports = (grunt) ->
  # tasks
  grunt.loadNpmTasks 'grunt-rsync'
  grunt.loadNpmTasks 'grunt-contrib-stylus'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-jasmine'

  # project configuration
  grunt.initConfig

    rsync:
      prod:
        src: "./"
        dest: "~/wiredin.loopinfinito.com.br/"
        host: "loopinfinito@bugsy.dreamhost.com"
        recursive: true
        syncDest: false
        exclude: ['.git*', 'node_modules', '.DS_Store', 'music']

    stylus:
      dev:
        options:
          compress: false
        files:
          'styles/style.css': 'styles/style.styl'
      prod:
        files:
          'styles/style.css': 'styles/style.styl'

    coffee:
      app:
        options:
          bare: true
        files:
          'scripts/teste.js': 'scripts/teste.coffee',
      tests:
        expand: true,
        flatten: true,
        cwd: 'tests/',
        src: ['*.coffee'],
        dest: 'tests/',
        ext: '.js'
        options:
          bare: true

    jasmine:
      src: 'scripts/*.js',
      options:
        specs: 'tests/*_spec.js',
        # helpers: 'spec/*Helper.coffee'

    watch:
      files: ['./styles/style.styl', './scripts/*.coffee']
      tasks: ['stylus:dev', 'test']

    connect:
      server:
        options:
          port: 8000

  grunt.registerTask('default', ['connect', 'watch'])
  grunt.registerTask('test', ['coffee:app', 'coffee:tests', 'jasmine']);
