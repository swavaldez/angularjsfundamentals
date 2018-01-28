module app {
    export class EventListController implements ng.IController {
        $onInit = () => { };
        static $inject = ["$scope", "$location", "eventDataService"];        
        public events : any;
        constructor(
            private $scope: AppScope,
            private $location: ng.ILocationService,
            private eventDataService: app.services.EventDataService) {
            
            $scope.vm = this;
            eventDataService.getAllEvents().then(data => {
                this.events = data;
            });
        }
    }

    eventApp.controller("EventListController", EventListController);
}