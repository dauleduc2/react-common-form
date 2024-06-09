// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const TypescriptDeclarationPlugin = require("typescript-declaration-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.ts",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "index.js",
    filename: "index.js",
    library: "react-common-form",
    libraryTarget: "umd",
    libraryExport: "default",
    globalObject: "this",
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    new UglifyJSPlugin(),
    new TypescriptDeclarationPlugin({
      removeComments: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
