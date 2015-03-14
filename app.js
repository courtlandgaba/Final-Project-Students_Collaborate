(function () {
    "use strict";
    console.log("app.js loaded");

    angular.module('eventApp', [
        'ngRoute',
        'angular-carousel'

    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainController as mainCtrl'
            })
            .when('/admin', {
                templateUrl: 'views/admin.html',
                controller: 'AdminController as adminCtrl'
            })
            .when('/admin/edit/splash/:SplashId', {
                templateUrl: 'views/edit/editSplash.html',
                controller: 'AdminController as adminCtrl'
            })
            .when('/admin/edit/rule/:RuleId', {
                templateUrl: 'views/edit/editRule.html',
                controller: 'AdminController as adminCtrl'
            })
            .when('/admin/edit/event/:EventId', {
                templateUrl: 'views/edit/editEvent.html',
                controller: 'AdminController as adminCtrl'
            })
            .when('/admin/edit/person/:PersonId', {
                templateUrl: 'views/edit/editPerson.html',
                controller: 'AdminController as adminCtrl'
            })








            // .when('/blog', {
            //     templateUrl: 'views/blog.html',
            //     controller: 'BlogController as blogCtrl'
            // })
            // .when('/gallery', {
            //     templateUrl: 'views/gallery.html',
            //     controller: 'GalleryController as gallCtrl'
            // })

    })
    .constant('_', _)
})();
