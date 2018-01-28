var app;
(function (app) {
    var EventController = /** @class */ (function () {
        function EventController($scope, eventDataService, $anchorScroll, $routeParams, event, sortOrder) {
            this.$scope = $scope;
            this.eventDataService = eventDataService;
            this.$anchorScroll = $anchorScroll;
            this.$routeParams = $routeParams;
            this.event = event;
            this.sortOrder = sortOrder;
            this.$onInit = function () { };
            $scope.vm = this;
            this.loadData();
            this.sortOrder = "name";
        }
        EventController.prototype.loadData = function () {
            var _this = this;
            var id = this.$routeParams.eventId;
            this.eventDataService.getEvent(id).then(function (event) {
                _this.event = event;
            });
        };
        EventController.prototype.upVoteSession = function (session) {
            session.upVoteCount++;
        };
        EventController.prototype.downVoteSession = function (session) {
            session.upVoteCount--;
        };
        EventController.prototype.scrollToSession = function () {
            this.$anchorScroll();
        };
        EventController.$inject = ["$scope", "eventDataService", "$anchorScroll", "$routeParams"];
        return EventController;
    }());
    app.EventController = EventController;
    app.eventApp.controller("EventController", EventController);
})(app || (app = {}));
