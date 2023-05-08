import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.(sa|sc|c)ss$/,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader, // Injects styles into DOM
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: true,
            auto: (resourcePath: string) => resourcePath.includes(".module."),
            localIdentName: options.isDev
              ? "[path][name]___[local]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader", // Compiles Sass to CSS, using Node Sass by default
    ],
  };

  return [typescriptLoader, cssLoader];
};
