//配置文件夹别名
module.exports = {
  lintOnSave:false,
  configureWebpack: {

    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'store': '@/store',
        'views': '@/views',
        'common':'@/common'
      }
    }
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },
}