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
            .when('/admin/edit/:featuredPersonId', {
                templateUrl: 'views/editFeaturedPerson.html',
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
