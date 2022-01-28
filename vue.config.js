//解决跨域问题

//新建一个代理类
let proxyObj={}
//所有带'/'的都要代理
proxyObj['/']={
    //websacket
    ws:false,
    //目标地址，代理到哪里去
    target:'http://localhost:8081',
    //发送请求头host会被设置target
    changeOrigin:true,
    //不重写请求地址
    pathRewrite:{
        '^/':'/'
    }
}

module.exports={
    devServer:{
        host:'localhost',
        port:8080,
        //代理
        proxy:proxyObj
    }
}