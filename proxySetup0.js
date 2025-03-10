const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000", // Your backend URL
      changeOrigin: true,
      pathRewrite: { "^": "" }, // Remove "/api" prefix if needed
    })
  );
};
