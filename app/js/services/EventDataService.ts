module app.services {

    export class EventDataService {


        static $inject = ["$http", "$log", "$resource"];
        constructor(private $http: ng.IHttpService,
            private $log: ng.ILogService,
            private $resource : ng.resource.IResourceService) {
        }

        // public getEvent(): ng.IPromise<IEvent> {
        //     let event: IEvent;
        //     return this.$http.get("/data/event/1").then(response => {
        //         event = response.data as IEvent
        //         return event;
        //     }, reason => {
        //         this.$log.warn(reason);
        //         return event;
        //     });
        // }

        private resource = this.$resource("/data/event/:id", { id: "@id"}, 
                { "getAll": { method: "GET", isArray : true, params: { something : "foo"} }});

        public getEvent(eventId) : ng.IPromise<IEvent> {
            let event: IEvent;
            return this.resource.get({id:eventId}).$promise
            .then(response => {
                event = response as IEvent;
                return event;
            }).catch(reason => {
                this.$log.warn(reason);
                return event;
             });
        }

        public save(event: IEvent) {
            event.id = 999;
            return this.resource.save(event);
        }

        public getAllEvents(){
            let events: IEvent[];            
            return this.resource.query().$promise.then(response => {
                return response;
            });
        }
    }


    eventApp.service("eventDataService", EventDataService);

}