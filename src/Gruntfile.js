module.exports = function(grunt) {
	var outdir = '../static/';
	var membersdir = 'members/';
	grunt.task.registerTask('members', 'create memebers.json', function() {
		grunt.log.writeln('-------');
		grunt.log.writeln(outdir);
		grunt.log.writeln(membersdir);
		var member_file_list = grunt.file.expand(membersdir + "*.json");
		var i;
		var members = [];
		var output = {
			"row": []
		};
		var row = {
			"col": []
		};
		var member = {};
		for (i = 0; i < member_file_list.length; i++) {
			grunt.log.writeln("reading file:" + member_file_list[i]);
			member = grunt.file.readJSON(member_file_list[i]);
			if (row.col.length < 3) {
				row.col.push(member);
			} else {
				output.row.push(row);
				row = {
					"col": []
				};
				row.col.push(member);
			}
		}
		if (row.col.length > 0) output.row.push(row);
		output = JSON.stringify(output)
		grunt.file.write(outdir + "members.json", output);
	});
}