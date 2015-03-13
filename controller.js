
(function () {
    "use strict";
    angular.module('eventApp')
    .controller('MainController', function (FeaturedPersonService, $location, $routeParams, _, $rootScope) {
        console.log("Configuring MainController")

        var mainCtrl = this;

        FeaturedPersonService.getSingleFeaturedPerson($routeParams.featuredPersonId).success(function (data) {
            mainCtrl.singleFeaturedPerson=data;
        });
        FeaturedPersonService.getFeaturedPersons().success(function (data) {
            mainCtrl.featuredPerson = data;
        });
        mainCtrl.currentIndex = $routeParams.featuredPersonId;

        console.log("Done Configuring MainController")




    })

    .controller('AdminController', function (FeaturedPersonService, $location, $routeParams, _, $rootScope) {

        var adminCtrl = this;

        FeaturedPersonService.getFeaturedPersons().success(function (data) {
            adminCtrl.featuredPerson = data;
        });
        FeaturedPersonService.getSingleFeaturedPerson($routeParams.featuredPersonId).success(function (data) {
            adminCtrl.singleFeaturedPerson=data;
        });
        adminCtrl.currentIndex = $routeParams.featuredPersonId;

        adminCtrl.addFeaturedPerson = function (newFeaturedPerson) {
            FeaturedPersonService.createFeaturedPerson(newFeaturedPerson);
            $location.path('/admin');
        };
        adminCtrl.deleteFeaturedPerson = function (id) {
            FeaturedPersonService.deleteFeaturedPerson(id);
        };
        adminCtrl.updateFeaturedPerson = function (featuredPerson) {
            FeaturedPersonService.updateFeaturedPerson(featuredPerson, $routeParams.featuredPersonId);
            $location.path('/admin');
        };

    })



})();
