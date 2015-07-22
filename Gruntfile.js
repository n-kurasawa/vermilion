/* ------------------------------------
 *	||| grunt-rsync |||
 *	you must setting your ~/.ssh/config to connect "EC2 instance"
 *	tha name is "demo"
 ------------------------------------ */
module.exports = function(grunt){
	grunt.initConfig({
		rsync: {
			options: {
				args: ["--verbose"],
				exclude:[
	        '.git',
	        '.gitignore',
	        'node_modules',
	        '.DS_Store'
				],
				recursive: true,
				host: 'vermillion'
			},
			dist: {
				options: {
					src: "./application/**",
					dest: "/var/application",
					syncDestIgnoreExcl: true,
					dryRun: false,
					compareMode: "checksum"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-rsync');

	grunt.registerTask('deploy', 'Deploy', function(env){

		var config = grunt.config();
		grunt.initConfig(config);
		grunt.task.run("rsync");

	});


};
