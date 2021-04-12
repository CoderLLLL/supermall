module.exports = {
    configureWebpack : {
        resolve:{
            //extensions:[],  //配置后缀，到时候写引用时可以省略写后缀（已经配置过，但不能去node_modules改，只能在这里加
            alias:{
                'src':'@',
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }

        }
    }
}
