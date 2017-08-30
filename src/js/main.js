/**
 * Created by Luo on 2017/8/30.
 */
//主模块
angular.module('app',['ngRoute','aside','header','index','login'])
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