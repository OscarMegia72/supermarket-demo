
const webpack = require('webpack');
const date = Date();
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
      // new webpack.DefinePlugin({
      //     'process.env': {
      //         VUE_APP_DATE_VERSION: '"' + date + '"'
      //     }
      // })
    ]
  },
  devServer: {
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    public: 'localhost:8091',
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 8091,
    https: true,
    hotOnly: false
  },

  filenameHashing: true,
  outputDir: `../../../../public/javascripts/vue/food/${process.env.VUE_APP_I18N_LOCALE}/`,

  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};
