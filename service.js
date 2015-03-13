(function () {
    "use strict";

    console.log("service loaded")

    angular.module('eventApp')
        .factory('FeaturedPersonService', function ($http, $rootScope) {

            var url = 'http://tiy-fee-rest.herokuapp.com/collections/final-gabaaa';

            var createFeaturedPerson = function (featuredPerson) {
                $http.post(url, featuredPerson);
                $rootScope.$broadcast('featuredPerson:created');
            };
            var getFeaturedPersons = function () {
                return $http.get(url);
            };
            var getSingleFeaturedPerson = function (id) {
                return $http.get(url + '/' + id);
            };
            var updateFeaturedPerson  = function (album, id) {
                $http.put(url + '/' + id, album);
                $rootScope.$broadcast('featuredPerson:updated');
            };
            var deleteFeaturedPerson  = function (id) {
                $http.delete(url + '/' + id);
                $rootScope.$broadcast('featuredPerson:deleted');
            };
            return {
                createFeaturedPerson: createFeaturedPerson,
                getFeaturedPersons: getFeaturedPersons,
                getSingleFeaturedPerson: getSingleFeaturedPerson,
                updateFeaturedPerson: updateFeaturedPerson,
                deleteFeaturedPerson: deleteFeaturedPerson,
            }


      })

    //     .factory('BlogService', function ($http, $rootScope) {
      //
    //         var url = 'http://tiy-fee-rest.herokuapp.com/collections/final-gaba';
      //
      //
    //         var createBlog = function (blog) {
    //             $http.post(url, blog);
    //             $rootScope.$broadcast('blog:created');
    //         };
    //         var getBlogs = function () {
    //             return $http.get(url);
    //         };
    //         var getSingleBlog = function (id) {
    //             return $http.get(url + '/' + id);
    //         };
    //         var updateBlog = function (blog, id) {
    //             $http.put(url + '/' + id, blog);
    //             $rootScope.$broadcast('blog:updated');
    //         };
    //         var deleteBlog = function (id) {
    //             $http.delete(url + '/' + id);
    //             $rootScope.$broadcast('blog:deleted');
    //         };
    //         return {
    //             createBlog: createBlog,
    //             getBlogs: getBlogs,
    //             getSingleBlog: getSingleBlog,
    //             deleteBlog: deleteBlog,
    //             updateBlog: updateBlog,
    //         }
    //   })

    //   .factory('SlideService', function ($http, $rootScope) {
      //
    //       var url = 'http://tiy-fee-rest.herokuapp.com/collections/final-gaba';
      //
      //
    //       var createSlide = function (Slide) {
    //           $http.post(url, Slide);
    //           $rootScope.$broadcast('Slide:created');
    //       };
    //       var getSlides = function () {
    //           return $http.get(url);
    //       };
    //       var getSingleSlide = function (id) {
    //           return $http.get(url + '/' + id);
    //       };
    //       var updateSlide = function (Slide, id) {
    //           $http.put(url + '/' + id, Slide);
    //           $rootScope.$broadcast('Slide:updated');
    //       };
    //       var deleteSlide = function (id) {
    //           $http.delete(url + '/' + id);
    //           $rootScope.$broadcast('Slide:deleted');
    //       };
    //       return {
    //           createSlide: createSlide,
    //           getSlides: getSlides,
    //           getSingleSlide: getSingleSlide,
    //           deleteSlide: deleteSlide,
    //           updateSlide: updateSlide,
    //       }
    //   })


})();




angular.element(document).ready(function () {
    var counter = 0,
        $items = $('.slideshow figure'),
        numItems = $items.length;

    var showCurrent = function(){
        var itemToShow = Math.abs(counter%numItems);

      $items.removeClass('show');
      $items.eq(itemToShow).addClass('show');
    };
    console.log(numItems);

    $('.next').on('click', function(){
        counter++;
        showCurrent();
    });
    $('.prev').on('click', function(){
        counter--;
        showCurrent();
    });
});
