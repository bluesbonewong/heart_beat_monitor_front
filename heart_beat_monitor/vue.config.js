// 配置webpack需要安装path
// npm  install  path  --save
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
        .set('@', resolve('src'))
        .set('assets', resolve('src/assets'))
        .set('styles', resolve('src/assets/styles'))
        .set('common', resolve('src/common'))
    },
    css: {
        loaderOptions: {
            // 因为用的postCss是scss，因此不能使用sass相关配置
            scss: {
                // @/ is an alias to src/
                prependData: `@import "~@/assets/styles/public.scss";`
            }
        }
    },
    devServer: {
        proxy: { // 代理
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/mock'
                }
            }
        }
    }
}
