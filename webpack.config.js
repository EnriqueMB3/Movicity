const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const path  = require('path')
module.exports = (env, argv) => {
    const {mode}  = argv
    const isProduction = mode === 'production'
    return {
        output: {
            filename: isProduction? '[name].[contenthash].js': 'main.js',
            path: path.resolve(__dirname, 'build'),
            publicPath: '/',
        },
        plugins:[
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                favicon: "./movicity.ico"
            }),
            new Dotenv({
                path: '.env', // Path to .env file (this is the default)
                safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
            })
        ],
        module:{
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [ '@babel/preset-react',
                            {
                                runtime: 'automatic'
                            }]
                        ]
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                      // Creates `style` nodes from JS strings
                      "style-loader",
                      // Translates CSS into CommonJS
                      "css-loader",
                      // Compiles Sass to CSS
                      "sass-loader",
                    ],
                  },
                {
                    test:   /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.png$/,
                    use: 'file-loader'
                  },
                  {
                    test: /\.jpg$/,
                    use: 'file-loader'
                  },
                  {
                    test: /\.jpeg$/,
                    use: 'file-loader'
                  },
                  {
                    test: /\.svg$/,
                    use: 'file-loader'
                  }

            ]
        },
        devServer:{
            historyApiFallback: true,
            open: true,
            port: 3500,
            compress: true
        },
        devtool: 'source-map'
    }
}