module.exports = function( grunt ) {

	// project configuration
	grunt.initConfig({
		rsync: {
			production: {
				src: "./",
				dest: "~/wiredin.loopinfinito.com.br/",
				host: "loopinfinito@bugsy.dreamhost.com",
				recursive: true,
				syncDest: true,
				exclude: [ '.git*', 'node_modules', '.DS_Store' ]
			}
		}
	})

	// tasks
	grunt.loadNpmTasks('grunt-rsync')
}
