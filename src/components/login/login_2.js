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
        'http',
        '$location',
        'WEB_API',
        function($scope,http,$location,WEB_API){
        //登录功能
         $scope.user = {
             tc_name:'',
             tc_pass:''
         };

         $scope.login = function(){
             var api = WEB_API.login;
             http[api.method](api.url,function(data){
                 locaStorage.setItem('userInfo',JSON.stringify(data));
                 $location.path('/');
             },$scope.user);
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