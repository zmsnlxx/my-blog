module.exports = {
  lintOnSave: false,
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/api/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
    },  // 配置多个代理
  }
};
