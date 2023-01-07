'use strict';

eventsApp.controller('EventController', function($scope, eventData, $routeParams){

    $scope.upVoteSession = function(session){
        session.upVoteCount +=1;
    }

    $scope.downVoteSession = function(session){
        session.upVoteCount -=1;
    }

    eventData.getEvent($routeParams.eventId)
        .$promise
        .then(function(event){
            $scope.event = event;
        })
        .catch(function(error){
            console.log(error);
        });
});
