const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports =
{
    // JavaScript 执行入口文件
    entry: "./main.js",
    
    output:
    {
        // 把所有依赖的模块合并输出到一个名为 “bundle.js” 文件中
        filename: "bundle.js",

        // 输出文件都放到 dist 目录下
        path: path.resolve(__dirname, "./dist")
    },

    module:
    {
        rules:
        [
            {
                test: /\.css$/,

                loaders: ExtractTextPlugin.extract
                ({
                    // 读取 .css 文件需要的 loader
                    use: ["css-loader"]
                })
            }
        ]
    },

    plugins:
    [
        new ExtractTextPlugin
        ({
            // 从 .js 文件提取出来的 .css 文件的名称
            filename: `[name].css`
        })
    ]
};
