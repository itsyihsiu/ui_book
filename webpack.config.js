const path = require('path');

// module.exports = {
//   entry: './src/vanilla-ui.js',
//   output: {
//     filename: 'vanilla-ui.min.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   mode: 'production',
// };

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
        mode: 'production',
    },
];
