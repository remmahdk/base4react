const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    "mode": "development",
    "entry": "./src/index.js",
    "output": {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
    },
    "devtool": "source-map",
    "devServer": {
        inline:true,
        host: '0.0.0.0',
        port: 3002
    },
    "module": {
        "rules": [
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader"
                }
            },
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            },
	    { 
                "test": /\.s[ac]ss$/i,
                "use": [
                    // Creates 'style' nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                "test": /\.html$/,
                "use": [
                    {
                        "loader": "html-loader"
                    }
                ]
            }
        ]
    },
    "plugins": [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}
