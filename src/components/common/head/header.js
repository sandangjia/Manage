/**
 * Created by Luo on 2017/8/30.
 */
angular.module('header',[])
    .directive('nglHeader',[function(){
        return{
            scope:{},
            restrict:'E',
            templateUrl:'/src/components/common/head/header.html',
            replace:true,
            controller:['$scope',function($scope){
                console.log('公共头部');
            }]
        }
    }]);