const path = require('path');

module.exports = [
    {
        entry: './src/vanilla-ui.js',
        output: {
            filename: 'vanilla-ui.min.js',
            path: path.resolve(__dirname, 'dist'),
        },
        mode: 'production',
    },
    {
        entry: './src/vanilla-ui.js',
        output: {
            filename: 'vanilla-ui.min.js',
            path: path.resolve(__dirname, 'demo'),
        },
        mode: 'development',
        devServer: {
            static: {
                directory: path.join(__dirname, 'demo'),  // Directory to serve
            }, 
            compress: true,  // Enable gzip compression for everything served
            port: 9000,  // Port number to listen on
            open: true,  // Automatically open the browser
            hot: true,  // Enable Hot Module Replacement
        },
    },
];
