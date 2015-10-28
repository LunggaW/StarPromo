angular.module('ionicApp', ['ionic', 'ionicApp.controllers'])

//var app = angular.module('ionicApp', ['ionic', 'angularMoment'])

//var onDeviceReady = function () {  
//    console.log("Application start");
//    angular.bootstrap(document.body, ['ionicApp']);
//}

.controller("MainCtrl", function () {
    console.log("Main Controller says: Hello World");
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider


    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "app/templates/menu.html",
        controller: 'AppCtrl'
    })
    
	.state('app.playlists',
    {
        url: "/playlists",
        views: {
            'menuContent': {
                templateUrl: "app/templates/playlists.html",
                controller: 'PlaylistsCtrl'
            }
        }
    })

        .state('app.signup', {
            url: "/signup",
            views: {
                'menuContent': {
                    templateUrl: "app/templates/signup.html",
                    controller: 'SignUpCtrl'
                }
            }
        })


    .state('app.signin', {
        url: "/signin",
        views: {
            'menuContent': {
                templateUrl: "app/templates/signin.html",
                controller: 'SignInCtrl'
            }
        }
    })
     
    .state('app.zoom', {
        url: "/zoom",
        views: {
            'menuContent': {
                templateUrl: "app/templates/zoom.html",
                //controller: 'ZoomCtrl'
            }
        }
    })
    .state('app.browse',
        {
            url: "/browse",
            views: {
                'menuContent': {
                    templateUrl: "app/templates/browse.html",
                    controller: 'BrowseCtrl'
                }
            }
        })
    .state('app.slidebox',
    {
        url: "/slidebox",
        views: {
            'menuContent': {
                templateUrl: "app/templates/SlideBox.html",
                controller: 'SlideBoxCtrl'
            }
        }
    })

    .state('app.search',
    {
        url: "/search",
        views: {
            'menuContent': {
                templateUrl: "app/templates/search.html",
                controller: 'SearchCtrl'
            }
        }
    })

    .state('app.informasi',
    {
        url: "/informasi",
        views: {
            'menuContent': {
                templateUrl: "app/templates/Informasi.html",
                controller: 'InformasiCtrl'
            }
        }
    })


    // if none of the above states are matched, use this as the fallback
    //$urlRouterProvider.otherwise('/main');
    $urlRouterProvider.otherwise('/app/playlists');
});
