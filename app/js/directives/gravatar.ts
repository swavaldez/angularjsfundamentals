module app.directives {
    eventApp.directive("gravatar", (gravatarUrlBuilderService : app.services.GravatarUrlBuilderService) => {
        return {
            restrict : "E",
            template : "<img />",
            replace : true, 
            link: (scope: ng.IScope, element : ng.IAugmentedJQuery, attrs : ng.IAttributes, controller : ng.IController ) => {
                attrs.$observe("email", (newValue? : string, oldValue? : string) => {
                    if(newValue !== oldValue) {
                        attrs.$set("src", gravatarUrlBuilderService.buildGravatarUrl(newValue));
                    }
                })
            }
        }
    });
}