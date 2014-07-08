'use strict';

/**
 * @ngdoc function
 * @name timerListApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the timerListApp
 */
angular.module('timerListApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
