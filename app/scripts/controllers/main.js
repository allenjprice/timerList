'use strict';

/**
 * @ngdoc function
 * @name timerListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the timerListApp
 */
angular.module('timerListApp')
  .controller('MainCtrl', function ($scope) {
    
    $scope.item = {
      name: '',
      time: '',
      done: false
    };

    $scope.list = [];

    $scope.resetItem = function(){
      $scope.item = {
        name: '',
        time: '',
        done: false
      };
    };

    $scope.submitItem = function(){
      console.log('submitItem hit');
      $scope.list.push($scope.item);
      $scope.resetItem();
      console.log($scope.list);
    };

    $scope.toggleComplete = function(item){
      item.done = !item.done;
    };

  });
