export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: String;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
}