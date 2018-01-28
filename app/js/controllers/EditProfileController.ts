module app {

    export class EditProfileController implements ng.IController {

        public user : IUser ;

        $onInit = () => { };

        static $inject = ["$scope", "gravatarUrlBuilderService"];
        constructor(private $scope : AppScope,
        private gravatarUrlBuilderService: app.services.GravatarUrlBuilderService) {
            $scope.vm = this;

        }
        
        public getGravatarUrl(email : string) : string {
            return this.gravatarUrlBuilderService.buildGravatarUrl(email);
        }
        
    }

    eventApp.controller("EditProfileController", EditProfileController)
}