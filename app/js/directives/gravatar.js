var app;
(function (app) {
    var directives;
    (function (directives) {
        app.eventApp.directive("gravatar", function (gravatarUrlBuilderService) {
            return {
                restrict: "E",
                template: "<img />",
                replace: true,
                link: function (scope, element, attrs, controller) {
                    attrs.$observe("email", function (newValue, oldValue) {
                        if (newValue !== oldValue) {
                            attrs.$set("src", gravatarUrlBuilderService.buildGravatarUrl(newValue));
                        }
                    });
                }
            };
        });
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
