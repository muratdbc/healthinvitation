(function(){
    // console.log("here")
    angular.module('app', [])
    angular.module('app').controller('MainCtrl', ['$scope','$window','httpService', function ($scope,$window,httpService) {
      $scope.openDoor=function(){
        if($scope.password==='client'){
          console.log($scope.password)
          $window.location.href = '/client';
        }else if($scope.password==='connect'){
          console.log($scope.password)
          $window.location.href = '/connect';
        }else if($scope.password==='vip'){
          console.log($scope.password)
          $window.location.href = '/vip';
        }else{
          console.log($scope.password)
        }
      }
      $scope.sendClientEmail=function(user){
        $scope.masterClient=angular.copy(user)
        console.log($scope.masterClient)
        var url="http://localhost:3000/client"
        httpService.post($scope.masterClient,url).then(function(statusData) {
          $scope.status = statusData;
          console.log($scope.status)
          if($scope.status.status===200){
            $window.location.href = '/calendar';
          }else{
            console.log("Something went wrong")
          }
        });
      }
      $scope.sendConnectEmail=function(connect){
        $scope.masterConnect=angular.copy(connect)
        console.log($scope.masterConnect)
        var url="http://localhost:3000/connect"
        httpService.post($scope.masterConnect,url).then(function(statusData) {
          $scope.status = statusData;
          console.log($scope.status)
          if($scope.status.status===200){
            $window.location.href = '/calendar';
          }else{
            console.log("Something went wrong")
          }
        });
      }
      $scope.sendVipEmail=function(vip){
        $scope.masterVip=angular.copy(vip)
        console.log($scope.masterVip)
        var url="http://localhost:3000/vip"
        httpService.post($scope.masterVip,url).then(function(statusData) {
          $scope.status = statusData;
          console.log($scope.status)
          if($scope.status.status===200){
            $window.location.href = '/calendar';
          }else{
            console.log("Something went wrong")
          }
        });
      }

    }])
    angular.module('app').factory('httpService', ['$http','$q','$log',function ($http,$q,$log) {

      var httpService={}
      httpService.post=function(data,url){
        var deferred = $q.defer();
        var req = {
           method: 'POST',
           url: url,
           headers: {
             'Content-Type': 'application/json'
           },
           data: data
          }
          return $http(req).then(
              function (response) {
                return {
                   status: response.data.status
              }
        })
      }
      return httpService;
    }])
}())