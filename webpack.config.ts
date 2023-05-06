import { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPaths } from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "src", "index.html"),
};
const mode = "development";
const isDev = mode === "development";

const config: Configuration = buildWebpackConfig({
  mode: "development",
  paths,
  isDev,
});

export default config;
