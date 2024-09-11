module.exports = function(grunt) {
    // Configuração das tarefas do Grunt
    grunt.initConfig({
        // Configuração do Uglify (minificação de JavaScript)
        uglify: {
            build: {
                files: {
                    'dist/script.min.js': ['js/script.js']  // Minifica script.js para script.min.js
                }
            }
        },
        // Configuração do CSSMin (minificação de CSS)
        cssmin: {
            target: {
                files: {
                    'dist/style.min.css': ['css/style.css']  // Minifica style.css para style.min.css
                }
            }
        }
    });

    // Carregar os plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Registrar a tarefa padrão
    grunt.registerTask('default', ['uglify', 'cssmin']);
};
