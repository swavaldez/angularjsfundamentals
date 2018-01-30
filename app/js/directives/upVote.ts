module app.directives {
    eventApp.directive("upVote", () => {
        return {
            restrict : "E",
            templateUrl : "/templates/directives/upvote.html",
            scope : {
                upvote : "&",
                downvote: "&",
                count: "="
            }
        }
    });
}