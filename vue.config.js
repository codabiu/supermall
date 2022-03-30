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
  }
}
