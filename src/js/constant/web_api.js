/**
 * Created by Luo on 2017/8/31.
 */
angular.module('web_api',[])
    .constant('WEB_API',{
        //登录
        login:{
            url:'/api/login',
            method:'post'
        },

        //退出
        logout:{
            url:'/api/logout',
            method:'post'
        }
    });