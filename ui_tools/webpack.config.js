const path = require('path');

module.exports = [
    {
        entry: './src/main.js',
        output: {
            filename: 'ui_tools.min.js',
            path: path.resolve(__dirname, 'dist'),
        },
        mode: 'production',
    },
    {
        entry: './src/main.js',
        output: {
            filename: 'ui_tools.min.js',
            path: path.resolve(__dirname, 'docs'),
        },
        mode: 'development',
        devServer: {
            static: {
                directory: path.join(__dirname, 'docs'),  // Directory to serve
            }, 
            compress: true,  // Enable gzip compression for everything served
            port: 9000,  // Port number to listen on
            open: true,  // Automatically open the browser
            hot: true,  // Enable Hot Module Replacement
        },
    },
];
