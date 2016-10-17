(function() {
  'use strict';
  var app = angular.module('hikeIT', ['ngMessages']);
  $('select').material_select();


  app.controller("formPoster", function($scope,$rootScope){
    $rootScope.posts = [{id:1, title: "Estes Park", author: "gannonk08", imgURL: "https://cdn-co.milespartnership.com/sites/default/master/files/styles/media-player-large/public/1_Family-Hiking_0.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna", rating: 5},{id:2, title: "Apple Mountain", author: "sanches", imgURL: "https://media-cdn.tripadvisor.com/media/photo-o/06/db/bd/34/winter-in-the-village.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna", rating: 3}, {id:3, title: "Sunrise Mountain", author: "Brett", imgURL: "https://res.cloudinary.com/simpleview/image/upload/v1443056380/clients/estespark/epcvb_town_pano_a_e0a0b696-f9ab-2c4f-42b3514799fe0d42.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna", rating: -1}]

    $scope.addPost = function(title, author, imgURL, description) {
      var postsArray = $rootScope.posts;
      console.log(postsArray);
      console.log("add Post clicked");
      return addSinglePost(title, author, imgURL, description,postsArray)
    };
  })
    app.controller("changeRating", function($scope,$rootScope){
      $scope.changeRating = function(changeInRating) {
        var postsArray = $rootScope.posts;
        console.log("change rating clicked");
        return adjustRating(changeInRating)
      };

    })

  function adjustRating(changeInRating) {
    if (changeInRating === "increase") {
      console.log("Increase Rating");
      return true
    }
    else if (changeInRating === "decrease") {
      console.log("Decrease Rating");
      return false
    }
  }
  function addSinglePost(title, author, imgURL, description, postArray) {
  return postArray.push({id:postArray.length+1, title: title, author: author, imgURL: imgURL, description: description, rating: 0})
}

}());
