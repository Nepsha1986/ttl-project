const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const mode = env.NODE_ENV || 'development';
    const isDevelopment = mode === 'development';

    return {
        mode: mode,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    "test": /\.jsx?$/,
                    "exclude": "/node_modules/",
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                },
                {
                    test: /\.s(a|c)ss$/,
                    loader: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDevelopment
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader',
                    ]
                },
            ]
        },
        devServer: {
            historyApiFallback: true,
            contentBase: path.join(__dirname, 'dist')
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'src/index.html'
            }),
            new MiniCssExtractPlugin({
                filename: isDevelopment ? '[name].css' : '[name].[hash].css',
                chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
            })
        ]
    }
};
