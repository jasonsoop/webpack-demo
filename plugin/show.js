/**
 * 操作 DOM 元素，把 content 显示到网页上。
 * @param  {string} content
 */
 function show(content)
{
    document.getElementById("app").innerHTML = "Hello," + content;
}

// 通过 CommonJS 规范导出 show 函数
module.exports = show;
