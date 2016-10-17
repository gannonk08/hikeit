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
      $rootScope.comments = [{postID: 1, author: "John Doe", comment: "this place is awesome", date:"2016-10-17T18:28:56.244Z"}]

      $scope.changeRating = function(changeInRating,id) {
        var postsArray = $rootScope.posts;
        return adjustRating(changeInRating,id,postsArray)
      };

    })

  function adjustRating(changeInRating,id,postArray) {
    var foundObj = getObject(postArray, id)[0]
    if (changeInRating === "increase") {
      foundObj["rating"]++
    }
    else if (changeInRating === "decrease") {
    foundObj["rating"]--
    }
  }
  function addSinglePost(title, author, imgURL, description, postArray) {
  return postArray.push({id:postArray.length+1, title: title, author: author, imgURL: imgURL, description: description, rating: 0})
  }

  function addCommentToPost(postID,author,comment) {
    var currentDate = new Date();
    return comments.push({postID: postID, author: author, comment: comment, date:currentDate})
  }
  function getObject(postArray, postID) {
    return postArray.filter((post) => {
      if (post.id === postID) {
        return post
      }
    })
  }


}());
