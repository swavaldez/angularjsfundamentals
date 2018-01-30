module app.directives {
    eventApp.directive("eventThumbnail", () => {
        return {
            restrict : "E",
            templateUrl : "/templates/directives/eventThumbnail.html",
            replace : true, 
            scope : {
                event: "="
            }
        }
    });
}