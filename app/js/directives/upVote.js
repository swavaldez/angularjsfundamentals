var app;
(function (app) {
    var directives;
    (function (directives) {
        app.eventApp.directive("upVote", function () {
            return {
                restrict: "E",
                templateUrl: "/templates/directives/upvote.html",
                scope: {
                    upvote: "&",
                    downvote: "&",
                    count: "="
                }
            };
        });
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
