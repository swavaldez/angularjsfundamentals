var app;
(function (app) {
    var services;
    (function (services) {
        var EventDataService = /** @class */ (function () {
            function EventDataService($http, $log, $resource) {
                this.$http = $http;
                this.$log = $log;
                this.$resource = $resource;
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
                this.resource = this.$resource("/data/event/:id", { id: "@id" }, { "getAll": { method: "GET", isArray: true, params: { something: "foo" } } });
            }
            EventDataService.prototype.getEvent = function (eventId) {
                var _this = this;
                var event;
                return this.resource.get({ id: eventId }).$promise
                    .then(function (response) {
                    event = response;
                    return event;
                }).catch(function (reason) {
                    _this.$log.warn(reason);
                    return event;
                });
            };
            EventDataService.prototype.save = function (event) {
                event.id = 999;
                return this.resource.save(event);
            };
            EventDataService.prototype.getAllEvents = function () {
                var events;
                return this.resource.query().$promise.then(function (response) {
                    return response;
                });
            };
            EventDataService.$inject = ["$http", "$log", "$resource"];
            return EventDataService;
        }());
        services.EventDataService = EventDataService;
        app.eventApp.service("eventDataService", EventDataService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
