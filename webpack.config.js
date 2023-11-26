const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    // tells webpack to look at this file and create a bundle
    entry: "./frontend/index.js",
    // development mode webpack will include comments helpful for debugging
    mode: "development",
    // not needed but this will webpack to create a bundle called project that will run on web broswer
    target: "web",
    // tells webpack where to emit bundle file
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      clean: true,
    },
    // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags
    plugins: [
      new HtmlWebpackPlugin({
        template: "./frontend/index.html",
      }),
    ],
    // Proxy configuration to redirect API calls to Express server
    devServer: {
      static: {
        directory: path.join(__dirname, "./dist"),
      },
      proxy: {
        "/api/**": {
          target: "http://localhost:3000/",
          secure: false,
        },
        "/assets/**": {
          target: "http://localhost:3000/",
          secure: false,
        },
      },
    },
    // if webpack sees any files w/ these extensions use the specified loader
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          exclude: /node_modules/,
          //file-loader resolves import/require() on a file into a url and emits the file into the output directory.
          use: ["file-loader"],
        },
      ],
    },
  },
];
