/**
 * Created by Luo on 2017/8/30.
 */
angular.module('login',[])
    .directive('nglLogin',[
        function(){
        return{
            scope:{},
            restrict:'E',
            templateUrl:'/src/components/login/login.html',
            replace:true,
            controller:'nglLoginCtr'
        }
    }])
    .controller('nglLoginCtr',[
        '$scope',
        '$location',
        'api',
        function($scope,$location,api){
        //登录功能
         $scope.user = {
             tc_name:'',
             tc_pass:''
         };

         $scope.login = function(){
             //调用封装好的login方法请求接口，这里我们不需要关心接口的method与url
             //只需要关心请求成功后做什么就可以了
             api.login(function(data){
                localStorage.setItem('userInfo',JSON.stringify(data.result));
                 $location.path('/');
             },$scope.user);

             //历史登陆用户的头像回显
             var userInfo = JSON.parse(localStorage.getItem('userInfo'));
             $scope.userInfo = userInfo || {tc_avatar:'/public/img/default.png'};

             //var api = WEB_API.login;
             //http[api.method](api.url,function(data){
             //    locaStorage.setItem('userInfo',JSON.stringify(data));
             //    $location.path('/');
             //},$scope.user);
         };

         //$scope.login = function(){
         //    $http({
         //        url:'/api/login',
         //        method:'post',
         //        data:'tc_name='+$scope.user.tc_name +'&'+'tc_pass='+$scope.user.tc_pass,
         //        headers:{
         //            'Content-Type':'application/x-www-form-urlencoded'
         //        }
         //    })
         //    .then(function(resp){
         //        //console.log(resp);
         //        if(resp.data.code == 200){
         //            localStorage.setItem('userInfo',JSON.stringify(resp.data.result));
         //            $location.path('/')
         //        }else{
         //            alert('服务器错误');
         //        }
         //
         //    })
         //}
    }]);