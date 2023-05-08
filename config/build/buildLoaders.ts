import { RuleSetRule } from "webpack";

export const buildLoaders = (): RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.(sa|sc|c)ss$/,
    use: [
      "style-loader", // Injects styles into DOM
      "css-loader", // Translates CSS into CommonJS
      "sass-loader", // Compiles Sass to CSS, using Node Sass by default
    ],
  };

  return [typescriptLoader, cssLoader];
};
