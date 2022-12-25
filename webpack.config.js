const path = require("path");

const NodemonPlugin = require("nodemon-webpack-plugin");
const ForkTsCheckerPlugin = require("fork-ts-checker-webpack-plugin");

const BUNDLE = {
  entry: {
    calculator: "./calculator.ts",
    specification: "./specification.ts",
    specificationPortugal: "./specification_portugal.ts",
    calculatorPortugal: "./calculator_portugal.ts",
    logics: "./logics.ts",
    course: "./course.ts",
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
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "es2015",
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new ForkTsCheckerPlugin(), new NodemonPlugin()],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  output: BUNDLE.output,
};
