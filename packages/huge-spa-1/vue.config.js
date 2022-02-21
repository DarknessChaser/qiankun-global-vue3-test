const path = require('path');
const packageName = require('./package.json').name;

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 7001;

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'huge-spa-1',
  filenameHashing: true,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    plugins: [
      // new MonacoWebpackPlugin(), // Place it here
    ],
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: 'huge-spa-1',
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },
};
