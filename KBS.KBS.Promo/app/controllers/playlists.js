angular.module('ionicApp.controllers', [])

.controller('AppCtrl', function ($scope)
{
})

.controller('PlaylistsCtrl', function ($scope)
{
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
})

.controller('PlaylistCtrl', function ($scope, $stateParams)
{
})

.controller('SlideBoxCtrl', function ($scope, $ionicSlideBoxDelegate)
{
    $scope.items = friends;

    $scope.slideHasChanged = function ()
    {
        //$scope.items.push({ name: 'John', age: 25, gender: 'boy' });
        $ionicSlideBoxDelegate.update();
    };

    $scope.showImages = function(index)
    {
        $scope.activeSlide = index;
        $scope.showModal('templates/promo-popover.html');
    }
});


var friends = [
  { name: 'John', age: 25, gender: 'boy', image:"images/908.png"},
  { name: 'Jessie', age: 30, gender: 'girl' },
  { name: 'Johanna', age: 28, gender: 'girl' },
  { name: 'Joy', age: 15, gender: 'girl' },
  { name: 'Mary', age: 28, gender: 'girl' }
];