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

    //.state('main', {
    //    url: "/main",
    //    templateUrl: "app/templates/main.html",
    //    controller: 'MainCtrl'
    //})

    //.state('page2', {
    //    url: "/page2",
    //    templateUrl: "app/templates/page2.html",
    //})






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

    .state('app.filter',
    {
        url: "/filter",
        views: {
            'menuContent': {
                templateUrl: "app/templates/Filter.html",
                controller: 'FilterCtrl'
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
