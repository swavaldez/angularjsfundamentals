var app;
(function (app) {
    app.eventApp = angular.module('eventsApp', ["ngResource", "ngRoute"]);
    app.eventApp.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/newEvent", {
            templateUrl: "templates/NewEvent.html",
            controller: "EditEventController"
        })
            .when("/events", {
            templateUrl: "templates/EventList.html",
            controller: "EventListController"
        })
            .when("/events/:eventId", {
            templateUrl: "templates/EventDetails.html",
            controller: "EventController"
        })
            .otherwise({
            redirectTo: "/events"
        });
        $locationProvider.html5Mode(true);
    });
})(app || (app = {}));
