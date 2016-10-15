angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getAll = function() {
    // populate data object
    Links.getAll()
      .then(function(links) {
        $scope.data['links'] = links;
      });
  };

  $scope.getAll();
});
