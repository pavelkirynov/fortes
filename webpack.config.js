const path = require("path");

// Webpack plugins
const NodemonPlugin = require("nodemon-webpack-plugin");
const ForkTsCheckerPlugin = require("fork-ts-checker-webpack-plugin");

// Bundle config options
const BUNDLE = {
  entry: {
    calculator: "./test.ts",
    specification: "./specification.ts",
    specificationPortugal: "./specification-portugal.ts",
    calculatorPortugal: "./calculator-portugal.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
};

module.exports = {
  target: "node",
  entry: BUNDLE.entry,
  stats: "errors-only",
  module: getLoaders(),
  plugins: getPlugins(),
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  output: BUNDLE.output,
};

function getLoaders() {
  const esbuild = {
    test: /\.(js|jsx|ts|tsx)?$/,
    loader: "esbuild-loader",
    options: {
      loader: "tsx",
      target: "es2015",
    },
    exclude: /node_modules/,
  };

  const loaders = {
    rules: [esbuild],
  };

  return loaders;
}

/**
 * Plugins
 */
function getPlugins() {
  const nodemon = new NodemonPlugin();
  const tsChecker = new ForkTsCheckerPlugin();

  return [tsChecker, nodemon];
}
