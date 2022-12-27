const path = require("path");
const fs = require("fs");
const NodemonPlugin = require("nodemon-webpack-plugin");
const ForkTsCheckerPlugin = require("fork-ts-checker-webpack-plugin");

const entries = {
  test: "./src/test.ts",
};

//dynamically read contents of /src/ folder and create entries
fs.readdirSync("./src/")
  .filter((file) => {
    return file.match(
      /(logics|calculator|calculator_portugal|specification|specification_portugal)[_0-9]*.ts$/
    );
  })
  .forEach((f) => {
    entries[f.replace(/\.ts$/, "")] = ["./src/" + f];
  });

module.exports = {
  stats: "errors-only",
  target: "node",
  entry: entries,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
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
};
