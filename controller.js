


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
            mainCtrl.featuredPeople = data;
        });
        mainCtrl.currentIndex = $routeParams.featuredPersonId;

        console.log("Done Configuring MainController")


        var counter = 0,
            $items = $('.slideshow figure'),
            numItems = $items.length;
            console.log("there are " +numItems+ " found slides");

        var showCurrent = function(){
            var itemToShow = Math.abs(counter%numItems);

          $items.removeClass('show');
          $items.eq(itemToShow).addClass('show');
        };

        $('.next').on('click', function(){
            counter++;
            showCurrent();
        });
        $('.prev').on('click', function(){
            counter--;
            showCurrent();
        });








    })

    .controller('AdminController', function (FeaturedPersonService, $location, $routeParams, _, $rootScope) {

        var admin = this;

        FeaturedPersonService.getFeaturedPersons().success(function (data) {
            admin.featuredPeople = data;
        });
        FeaturedPersonService.getSingleFeaturedPerson($routeParams.featuredPersonId).success(function (data) {
            admin.singleFeaturedPerson=data;
        });
        admin.currentIndex = $routeParams.featuredPersonId;

        admin.addFeaturedPerson = function (newFeaturedPerson) {
            FeaturedPersonService.createFeaturedPerson(newFeaturedPerson);
            $location.path('/admin');
        };
        admin.deleteFeaturedPerson = function (id) {
            FeaturedPersonService.deleteFeaturedPerson(id);
        };
        admin.updateFeaturedPerson = function (featuredPerson) {
            FeaturedPersonService.updateFeaturedPerson(featuredPerson, $routeParams.featuredPersonId);
            $location.path('/admin');
        };

})

    // .controller('AdminController', function (AlbumService, $location, $routeParams, _, $rootScope) {
    //
    //
    // })
    //
    // .controller('BlogController', function (BlogService) {
    //
    //
    // })
    //
    // .controller('SlideController', function (SlideService) {
    //
    //
    // })

})();
