var app;
(function (app) {
    var filter;
    (function (filter) {
        app.eventApp.filter("durations", function () { return function (duration) {
            switch (duration) {
                case 1:
                    return "Half Hour";
                case 2:
                    return "1 hour";
                case 3:
                    return "Half Day";
                case 4:
                    return "Full Day";
            }
        }; });
    })(filter = app.filter || (app.filter = {}));
})(app || (app = {}));
