module app.directives {
    eventApp.directive("collapsible", () => {
        return {
            restrict : "E",        
            replace : true, 
            template: "<div><h4 class='well-title' ng-click='toggleVisibility()'>{{title}}</h4><div ng-show='visible' ng-transclude></div></div>",
            controller : ($scope : collapsibleScope) => {
                $scope.visible = true;
                $scope.toggleVisibility = () => {
                    $scope.visible = !$scope.visible;
                }
            },            
            transclude: true,
            scope : {
                title: "@"
            }
        }
    });

    export interface collapsibleScope extends ng.IScope {
        visible : boolean;
        toggleVisibility : Function;
    }
}

