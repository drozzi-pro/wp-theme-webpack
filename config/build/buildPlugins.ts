import path from "path"
import webpack from "webpack"
import HtmlWebpackPlugin from 'html-webpack-plugin'

export function buildPlugins(): webpack.WebpackPluginInstance[] {

    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
    ]
}