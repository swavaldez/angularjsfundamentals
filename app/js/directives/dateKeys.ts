module app.directives {
    eventApp.directive("dateKeys", () => {
        return {
            restrict : "A",     
            link: (scope: ng.IScope, element : ng.IAugmentedJQuery, attrs : ng.IAttributes, controller : ng.IController ) => {
                element.on("keydown", function(eventObject: JQueryEventObject) {
                    return (isNumericKeyCode(eventObject.keyCode) || 
                    isForwardSlashKeyCode(eventObject.keyCode) ||
                    isNavigationKeycode(eventObject.keyCode))
                  
                });

            } 
          
        }

        function isNumericKeyCode(keyCode: number) : boolean {
            return (keyCode >= 48 && keyCode <=57)
                || (keyCode >= 96 && keyCode <= 105);
        }
        function isForwardSlashKeyCode(keyCode: number) : boolean {
            return keyCode === 191;
        }

        function isNavigationKeycode(keyCode: number) : boolean {
            switch(keyCode) {
                case 8: //backspace
                case 35: //end
                case 36: //home
                case 37: //left
                case 38: //up
                case 39: //right
                case 40: //down
                case 45: //ins
                case 46: //del
                    return true;
                default:
                    return false;
            }
        }

    });
}