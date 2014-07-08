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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
