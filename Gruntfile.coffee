module.exports = (grunt) ->
  # tasks
  grunt.loadNpmTasks 'grunt-rsync'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-coffee'

  # project configuration
  grunt.initConfig
    rsync:
      production:
        src: "./"
        dest: "~/wiredin.loopinfinito.com.br/"
        host: "loopinfinito@bugsy.dreamhost.com"
        recursive: true
        syncDest: false
        exclude: ['.git*', 'node_modules', '.DS_Store', 'music']
    sass:
      dist:
        options:
          style: 'compressed'
        files:
          'style.css': 'style.scss'
    coffee:
      compile:
        files:
          './scripts/player.js': './scripts/player.coffee'
    watch:
      files: ['./style.scss', './scripts/player.coffee']
      tasks: ['sass', 'coffee']
    connect:
      server:
        options:
          port: 8000

  grunt.registerTask('default', ['connect', 'watch'])

