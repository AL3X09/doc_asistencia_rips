//https://medium.com/bb-tutorials-and-thoughts/vue-js-how-to-proxy-to-backend-server-a562bad965eb
module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8000/'
        },
        "usuarios": {
          target: 'http://localhost:8000/',
        }
      }
    }
  }