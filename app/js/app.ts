module app {
    export let eventApp = angular.module('eventsApp', ["ngResource", "ngRoute"]);

    eventApp.config(($routeProvider : ng.route.IRouteProvider,
    $locationProvider: ng.ILocationProvider) => {
        $routeProvider
        .when("/newEvent", { 
            templateUrl : "templates/NewEvent.html",
            controller : "EditEventController"
        })
        .when("/events", { 
            templateUrl : "templates/EventList.html",
            controller : "EventListController"
        })
        .when("/events/:eventId", { 
            templateUrl : "templates/EventDetails.html",
            controller : "EventController"
        })
        .otherwise({
            redirectTo : "/events"
        });

        $locationProvider.html5Mode(true);

    });
                                

    export interface AppScope extends ng.IScope {
        vm : any;
    }

    export interface IEvent {
        id : number;
        name : string;
        date : string;
        time : string;
        location : Ilocation;
        imageUrl : string;
        sessions : ISession[];
    }

    export interface Ilocation {
        address : string;
        city : string;
        province : string;
    }

    export interface ISession {
        name :string;
        creatorName : string;
        duration: number;
        level : string;
        abstract: string;
        upVoteCount: number;
    }

    export interface IUser {
        userName : string;
        password :string;
        emailAddress : string;
    }

    export interface IEventParams extends ng.route.IRouteParamsService {
        eventId : number;
    }

   
}


