/**
 * Created by Luo on 2017/8/30.
 */
//主模块
angular.module('app',[
    //第三方模块
    'ngRoute',
    //自己的组件
    'aside',
    'header',
    'index',
    'login',
    //自己的业务逻辑服务
    'http',
    'api',
    //自己的公共配置服务
    'web_api'
])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
        .when('/',{
            template:'<ngl-index></ngl-index>'
        })
        .when('/index',{
            redirectTo:'/'
        })
        .when('/login',{
            template:'<ngl-login></ngl-login>'
        })
        .otherwise({
            templateUrl:'/src/html/404.html'
        })
    }])
    //判断是否404页面  是则侧边栏隐藏
    .controller('appCtrl',['$scope','$location',function($scope,$location){
        $scope.$on('$locationChangeStart',function(){
            if($location.$$path == '/404'){
                $scope.isShow = false;
            }else{
                $scope.isShow = true;
            }
        })
    }]);