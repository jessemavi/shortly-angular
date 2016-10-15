angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function() {
    Links.addOne()
      .then(function(link) {
        $scope.link['url'] = $location.path('/link');
      });
  };

});


