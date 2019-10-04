module.exports = function (grunt) {

    grunt.initConfig({
        nwabap_ui5uploader: {
            options: {
                conn: {
                    server: 'http://mlk-tms-01.msk.aeroflot.ru:8003/',
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
                        bspcontainer_text: 'Удалить',
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