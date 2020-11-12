const path = require('path');
/* Path es el modulo que suministra utilidades 
para trabajar con rutas de archivos y drectorios
*/

const HtmlWebpackPlugin = require('html-webpack-plugin');

// Exportando modulo u objeto de configuración
module.exports = {
    // Punto de entrada del proyecto.
    entry: './src/index.js',

    // Donde se guardará el proyecto compilado y listo
    // para produccion
    output: {
        // Ruta donde creará la carpeta de los archivos
        // de salida (crea dist en el directorio de este
        // archivo).
        path: path.resolve(__dirname, 'dist'),
        // Nombre del archivo que contiene el compilado
        // de todo el proyecto JS
        filename: 'main.js'
    },

    // Trabajando sobre las extensiones que tiene el proyect.
    resolve: {
        extensions: ['.js'],
    },

    // Reglas necesarias
    module: {
        rules: [
            // Estructura de Babel
            // Como identificar los archivos en nuestro entorno
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                // Config  establecida
                loader: 'babel-loader'
            }
        ]
    },

    // Plugins a usar en webpack
    plugins: [
        new HtmlWebpackPlugin([
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ]),
    ]

    

}