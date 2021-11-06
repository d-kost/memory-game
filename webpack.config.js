const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'Memory Game', template: './src/template.html' })
    ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}