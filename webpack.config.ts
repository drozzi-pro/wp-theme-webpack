import path from "path"
import webpack from "webpack"
import { buildPlugins } from "./config/build/buildPlugins";


const config: webpack.Configuration = {
    mode: 'production',
    entry: {
        app: path.resolve('src', 'index.ts'),
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: buildPlugins(),
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}

export default config;