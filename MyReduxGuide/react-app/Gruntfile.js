module.exports = function(grunt) {

    grunt.initConfig({
    nwabap_ui5uploader: {
        options: {
        conn: {
            server: 'https://mlk-tms-01.msk.aeroflot.ru:8033',
            useStrictSSL: false
        },
        auth: {
            user: 'sponomarenko',
            pwd: 'T2udu8u1333'
        }
        },
        upload_build: {
        options: {
            ui5: {
            package: 'ZTC',
            bspcontainer: 'Z_TEST',
            bspcontainer_text: 'Remote after',
            transportno: 'T2SK900368'
            },
            resources: {
            cwd: 'build',
            src: '**/*.*'
            }
        }
        }
    }
    });

    grunt.loadNpmTasks('grunt-nwabap-ui5uploader');

    grunt.registerTask('deploy', ['nwabap_ui5uploader']);
  
  };