module.exports = (grunt) ->
  # tasks
  grunt.loadNpmTasks 'grunt-rsync'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-watch'

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
    watch:
      files: ['style.scss']
      tasks: 'sass'

  grunt.registerTask('default', 'watch')

