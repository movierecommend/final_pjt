const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // 프록시 대상 URL
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // 요청 URL에서 '/api'를 제거
        },
      },
    },
  },
})
