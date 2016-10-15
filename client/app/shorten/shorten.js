angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function() {
    console.log('addLink was invoked');

    // console.log(link);
    Links.addOne(link)
      .then(function(link) {
        $scope.link['url'] = $location.path('/link');
      });
  };

});


