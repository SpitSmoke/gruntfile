module.exports = function(grunt) {
    // Configuração das tarefas
    grunt.initConfig({
        // Configuração do LESS
        less: {
            development: {
                files: {
                    'css/style.css': 'less/style.less' // Compila o arquivo LESS para CSS
                }
            }
        },
        // Configuração do Uglify (minificação de JavaScript)
        uglify: {
            build: {
                files: {
                    'js/script.min.js': ['js/script.js'] // Minifica o arquivo script.js
                }
            }
        }
    });

    // Carregar os plugins que serão usados
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Registrar a tarefa padrão
    grunt.registerTask('default', ['less', 'uglify']);
};
