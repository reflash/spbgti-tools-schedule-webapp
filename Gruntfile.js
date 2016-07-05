module.exports = function(grunt) {

    grunt.initConfig({
        ngconstant: {
            // Options for all targets
            options: {
                space: '  ',
                wrap: '"use strict";\n\n {\%= __ngModule %}',
                name: 'config',
            },
            // Environment targets
            development: {
                options: {
                    dest: 'app/config.js'
                },
                constants: {
                    ENV: {
                        name: 'development',
                        apiEndpoint: 'http://localhost:8080/api'
                    }
                }
            },
            staging: {
                options: {
                    dest: 'app/config.js'
                },
                constants: {
                    ENV: {
                        name: 'staging',
                        apiEndpoint: 'https://spbgti-tools-schedule-staging.herokuapp.com/api'
                    }
                }
            },
            production: {
                options: {
                    dest: 'app/config.js'
                },
                constants: {
                    ENV: {
                        name: 'production',
                        apiEndpoint: 'https://spbgti-tools-schedule.herokuapp.com/api'
                    }
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-ng-constant');

    grunt.registerTask('dev', [
        'ngconstant:development'
    ]);

    grunt.registerTask('stag', [
        'ngconstant:staging'
    ]);

    grunt.registerTask('prod', [
        'ngconstant:production'
    ]);
};
