module app {

    export class EventController implements ng.IController {
        $onInit = () => { };

        static $inject = ["$scope", "eventDataService", "$anchorScroll", "$routeParams"];
        constructor(
            private $scope: AppScope,
            private eventDataService: app.services.EventDataService,
            private $anchorScroll : ng.IAnchorScrollService,
            private $routeParams: IEventParams,
            public event: IEvent,
            public sortOrder: string) {

            $scope.vm = this;
            this.loadData();
            this.sortOrder = "name";

        }

        private loadData(): void {
            let id = this.$routeParams.eventId;
            this.eventDataService.getEvent(id).then(event => {
                this.event = event;
            });
        }

        public upVoteSession(session: ISession): void {
            session.upVoteCount++;
        }

        public downVoteSession(session: ISession): void {
            session.upVoteCount--;
        }

        public scrollToSession() : void {
            this.$anchorScroll();
        }
    }

    eventApp.controller("EventController", EventController);

}