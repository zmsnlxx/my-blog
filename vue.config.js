module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/api/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
    }
  }
};
