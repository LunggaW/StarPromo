angular.module('ionicApp.controllers', [])
    .controller('AppCtrl', function($scope)
    {
    })
    .controller('PlaylistsCtrl', function($scope)
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
    .controller('PlaylistCtrl', function($scope, $stateParams)
    {
    })
    .controller('SlideBoxCtrl', function($scope, $ionicSlideBoxDelegate, $ionicModal)
    {
        var promocode;
        var imageUrl;
        var barcode;

        $scope.promoBest = friends;
        $scope.promoCategory = friends;
        $scope.promoCategoryDetail = friends;

        $scope.slideHasChanged = function()
        {
            //$scope.items.push({ name: 'John', age: 25, gender: 'boy' });
            $ionicSlideBoxDelegate.update();
        };

        $scope.showDataBest = function(index)
        {
            //$scope.activeSlide = index;
            promocode = $scope.promoBest[index].promocode;
            imageUrl = $scope.promoBest[index].image;
            barcode = $scope.promoBest[index].barcode;
            $scope.showModal('app/templates/promo-popover.html');
        }


//$scope.onTapBest = function (index)
        //{
        //    //$scope.activeSlide = index;
        //    imageUrl = $scope.promoBest[index].image;
        //    $scope.showModalImage('app/templates/promo-imagepopover.html');
        //}

        $scope.showDataCategory = function(index)
        {
            //$scope.activeSlide = index;
            promocode = $scope.promoCategory[index].promocode;
            imageUrl = $scope.promoCategory[index].image;
            barcode = $scope.promoCategory[index].barcode;
            $scope.showModal('app/templates/promo-categorydetail.html');
        }


        $scope.promoCategoryDetailShowData = function(index)
        {
            //$scope.activeSlide = index;
            promocode = $scope.promoCategoryDetail[index].promocode;
            imageUrl = $scope.promoCategoryDetail[index].image;
            $scope.showModal('app/templates/promo-categorydetaildetail.html');
        }

        $scope.showModal = function(templateUrl)
        {
            $scope.promo = {
                promocode: promocode,
                imageUrl: imageUrl
            }


            $ionicModal.fromTemplateUrl(templateUrl,
                {
                    scope: $scope,
                    animation: 'slide-in-up'
                }
            ).then(function(modal)
                {
                    $scope.modal = modal;
                    $scope.modal.show();
                }
            );

            // Close the modal
            $scope.closeModal = function()
            {
                $scope.modal.hide();
                $scope.modal.remove();
            };
        }
    });





var friends = [
  { name: 'John', age: 25, gender: 'boy', image:"images/908.png", promocode:'Matahari1', barcode:'Matahari1'},
  { name: 'Jessie', age: 30, gender: 'girl', image: "images/908_2.png" },
  { name: 'Johanna', age: 28, gender: 'girl', image: "images/909.jpg" },
  { name: 'Joy', age: 15, gender: 'girl', image: "images/909_2.png" },
  { name: 'Mary', age: 28, gender: 'girl', image: "images/910.png" }
];