const path = require('path');
const webpack = require('webpack');

const debugModeEnabled = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.js'
    },
    devtool: debugModeEnabled ? 'inline-sourcemap' : null,
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        hostoryApiFallback: true
    },
    plugins: debugModeEnabled ? [ ] : [
        new webpack.EnvironmentPlugin(['NOVE_ENV']),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ 
            mangle: false, 
            sourcemap: false,
            compress: true,
            comments: false,
            beautify: false
        })
    ]
};
