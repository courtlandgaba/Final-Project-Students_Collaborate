(function () {
    "use strict";
    console.log("app.js loaded");

    angular.module('eventApp', [
        'ngRoute',
        'angular-carousel',
        'uiGmapgoogle-maps'

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
            .when('/admin/edit/gallery/:GalleryId', {
                templateUrl: 'views/edit/editGallery.html',
                controller: 'AdminController as adminCtrl'
            })
    })

    .constant('_', _)
})();
