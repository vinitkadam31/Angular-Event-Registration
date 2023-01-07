'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/newEvent',
        {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        })
        .when('/events',
        {
            templateUrl: 'templates/EventList.html',
            controller: 'EventListController'
        })
        .when('/event/:eventId',
        {
            templateUrl: 'templates/EventDetails.html',
            controller: 'EventController'
        })
        .when('/editProfile',
        {
            templateUrl: 'templates/EditProfile.html',
            controller: 'EditProfileController'
        })
        .otherwise({redirectTo:'/events'});
    });
