var app;
(function (app) {
    var directives;
    (function (directives) {
        app.eventApp.directive("eventThumbnail", function () {
            return {
                restrict: "E",
                templateUrl: "/templates/directives/eventThumbnail.html",
                replace: true,
                scope: {
                    event: "="
                }
            };
        });
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
