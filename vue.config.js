module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3001/api/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/art": {
        target: "http://localhost:3000/api/",
        changeOrigin: true,
        pathRewrite: {
          "^/art": ""
        }
      },
    },  // 配置多个代理
  }
};
