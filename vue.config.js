module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve:{
      alias:{
        'assets':'@/assets',
        'network':'@/network',
        'views':'@/views',
        'components':'@/components',
        'common':'@/common',
      }
    }
  },
  // 手机浏览器运行配置
  devServer: {
    host:'192.168.137.1',
    port: 8080, 
  },
}
