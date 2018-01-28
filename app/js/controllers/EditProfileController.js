var app;
(function (app) {
    var EditProfileController = /** @class */ (function () {
        function EditProfileController($scope, gravatarUrlBuilderService) {
            this.$scope = $scope;
            this.gravatarUrlBuilderService = gravatarUrlBuilderService;
            this.$onInit = function () { };
            $scope.vm = this;
        }
        EditProfileController.prototype.getGravatarUrl = function (email) {
            return this.gravatarUrlBuilderService.buildGravatarUrl(email);
        };
        EditProfileController.$inject = ["$scope", "gravatarUrlBuilderService"];
        return EditProfileController;
    }());
    app.EditProfileController = EditProfileController;
    app.eventApp.controller("EditProfileController", EditProfileController);
})(app || (app = {}));
