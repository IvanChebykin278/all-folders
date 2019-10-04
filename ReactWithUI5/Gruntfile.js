module.exports = function (grunt) {

    grunt.initConfig({
        nwabap_ui5uploader: {
            options: {
                conn: {
                    server: 'https://vhs4h1709rds.pro.coil:54098',
                    useStrictSSL: false
                },
                auth: {
                    user: 'i347965',
                    pwd: 'T2udu8u13'
                }
            },
            upload_build: {
                options: {
                    ui5: {
                        package: 'ZREACTDEMO',
                        bspcontainer: 'Z_TEST',
                        bspcontainer_text: 'remote1',
                        transportno: 'S4HK900588'
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