angular.module('ionicApp', ['ionic', 'ionicApp.controllers'])

//var app = angular.module('ionicApp', ['ionic', 'angularMoment'])

//var onDeviceReady = function () {  
//    console.log("Application start");
//    angular.bootstrap(document.body, ['ionicApp']);
//}

// Admobs


//======admob code start=============
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
            var admobid = {};
            // select the right Ad Id according to platform
            if (/(android)/i.test(navigator.userAgent)) {
                admobid = { // for Android
                    banner: 'ca-app-pub-4222212202235653/6603421327',
                    //interstitial: 'ca-app-pub-6869992474017983/1657046752'
                };
            } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
                admobid = { // for iOS
                    banner: 'ca-app-pub-4222212202235653/9556887726',
                    //interstitial: 'ca-app-pub-6869992474017983/7563979554'
                };
            } else {
                admobid = { // for Windows Phone
                    banner: 'ca-app-pub-6869992474017983/8878394753',
                    //interstitial: 'ca-app-pub-6869992474017983/1355127956'
                };
            }

            if (window.AdMob) AdMob.createBanner({
                adId: admobid.banner,
                position: AdMob.AD_POSITION.BOTTOM_CENTER,
                autoShow: true
            })

        });//app ready function ends
    })




        






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
