const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        createProxyMiddleware(['/board', '/sign', 'post', 'comment'], {
            target: 'http://localhost:3001',
            changeOrigin: true
        })
    )
}