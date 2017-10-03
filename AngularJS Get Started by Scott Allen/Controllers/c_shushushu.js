/**
 * Created by ravid.tanami on 28/09/2017.
 */
// document.write("Hello:)")

(function(){
    // [] - dependencies from other modules
    var shuApp = angular.module("githubViewer", []);

    var shuMainController = function ($scope, $http) {
        var person = {
            firstName: 'Cute',
            lastName: 'Pappy',
            imageSrc: 'https://68.media.tumblr.com/avatar_29bdba358c83_128.png'
        };
        $scope.person = person;

        var onUserComplete = function(response) {
            $scope.user = response.data;
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the user"
        };

        /*    $http.get("https://api.github.com/users/ravidgolan")
         .then(onUserComplete, onError);*/
        $http.get("https://api.github.com/users/ravidgolan")
            .then(onUserComplete, onError);

        $scope.message = "GitHub Viewer"
    };

    shuApp.controller("MainController", shuMainController);
    // for minified:
    // shuApp.controller("MainController", ["$scope", "$http", shuMainController]);

}());





