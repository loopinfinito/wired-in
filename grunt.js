module.exports = function( grunt ) {

	// project configuration
	grunt.initConfig({
		rsync: {
			production: {
				src: "./",
				dest: "~/wiredin.loopinfinito.com.br/",
				host: "loopinfinito@bugsy.dreamhost.com",
				recursive: true,
				syncDest: false,
				exclude: [ '.git*', 'node_modules', '.DS_Store', 'music' ]
			}
		}
	})

	// tasks
	grunt.loadNpmTasks('grunt-rsync')
}
