module app {

    export class EditEventController implements ng.IController {
        $onInit = () => { };

        static $inject = ["$scope", "eventDataService"];
        constructor(
            private $scope: AppScope,
            private eventDataService: app.services.EventDataService) {

            $scope.vm = this;

        }

        public saveEvent(event: IEvent, newEventForm: ng.IFormController): void {

            if (newEventForm.$valid) {                
                this.eventDataService.save(event).$promise
                .then(response => console.log('success', response))
                .catch(response => console.log("failure"));
            }

        }

        public cancelEvent(): void {
            window.location.href = "/EventDetails.html";
        }

    }

    eventApp.controller("EditEventController", EditEventController);
}