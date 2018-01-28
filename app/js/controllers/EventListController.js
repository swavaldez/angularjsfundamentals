var app;
(function (app) {
    var EventListController = /** @class */ (function () {
        function EventListController($scope, $location, eventDataService) {
            var _this = this;
            this.$scope = $scope;
            this.$location = $location;
            this.eventDataService = eventDataService;
            this.$onInit = function () { };
            $scope.vm = this;
            eventDataService.getAllEvents().then(function (data) {
                _this.events = data;
            });
        }
        EventListController.$inject = ["$scope", "$location", "eventDataService"];
        return EventListController;
    }());
    app.EventListController = EventListController;
    app.eventApp.controller("EventListController", EventListController);
})(app || (app = {}));
