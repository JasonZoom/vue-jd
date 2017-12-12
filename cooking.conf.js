// 引入 cooking 依赖
var cooking = require('cooking');

// 调用 set 方法传入自定义配置
cooking.set({
    entry: './src/index.js', // 指定入口文件
    dist: './dist', // 设置打包后的文件目录
    hash: true, // 打包的文件是否带 hash
    sourceMap: true // 是否带 sourceMap
});

// 生成 webpack 配置并导出
module.exports = cooking.resolve();