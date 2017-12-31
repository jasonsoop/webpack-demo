const path = require("path");

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

                // 告诉 Webpack 在遇到以 .css 结尾的文件时；
                // 先使用 css-loader 读取 CSS 文件，再交给 style-loader 把 CSS 内容注入到 JavaScript 里。
                // use: ["style-loader", "css-loader"]

                // 通过 Object 方式传入
                use:
                [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options:
                        {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    }
};
