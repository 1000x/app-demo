/**
* module
*/
var app = angular.module('eigyo', [
    'ionic',
    'ngCordova',
    // utils
    'app.consts',
    'app.api',
    'app.check',
    'app.directives',
    'app.filters',
    'app.messages'
]);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
    	// TODO
        /*if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        // exit
        $ionicPlatform.registerBackButtonAction(function (event) {
            ExitService.doExit().then(function (result) {
                if (result) {
                    ionic.Platform.exitApp();
                }
            })

            event.preventDefault();
        }, 100);*/
    })
}).config(function ($stateProvider, $urlRouterProvider, ROUTE) {
    angular.forEach(ROUTE.states, function (state, index) {
        $stateProvider.state(state.stateId, {
            url: state.url,
            cache: !!state.cache,
            templateUrl: state.templateUrl
        })
    });
    $urlRouterProvider.otherwise('/coa01');
});
