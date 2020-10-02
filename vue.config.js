module.exports = {
  publicPath: process.env.BASE_URL || '/gp-admin',
  devServer: {
    proxy: process.env.VUE_APP_MAIN_APP_URL || 'http://localhost:3000'
  }
}
