var app;
(function (app) {
    var EditEventController = /** @class */ (function () {
        function EditEventController($scope, eventDataService) {
            this.$scope = $scope;
            this.eventDataService = eventDataService;
            this.$onInit = function () { };
            $scope.vm = this;
        }
        EditEventController.prototype.saveEvent = function (event, newEventForm) {
            if (newEventForm.$valid) {
                this.eventDataService.save(event).$promise
                    .then(function (response) { return console.log('success', response); })
                    .catch(function (response) { return console.log("failure"); });
            }
        };
        EditEventController.prototype.cancelEvent = function () {
            window.location.href = "/EventDetails.html";
        };
        EditEventController.$inject = ["$scope", "eventDataService"];
        return EditEventController;
    }());
    app.EditEventController = EditEventController;
    app.eventApp.controller("EditEventController", EditEventController);
})(app || (app = {}));
