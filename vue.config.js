module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "/blog" : "/",
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
