export type BuildMode = "development" | "production";

export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
};

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}


export interface BuildEnv {
  mode: BuildMode;
  port?: number;
}