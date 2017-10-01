/**
 * Created by ravid.tanami on 28/09/2017.
 */
// document.write("Hello:)")

(function(){
    // [] - dependencies from other modules
    var shuApp = angular.module("githubViewer", []);

    var shuMainController = function ($scope, $http) {

        var onUserComplete = function(response) {
            $scope.user = response.data;

            $http.get($scope.user.repos_url)
                .then(onRepos, onError)
        };
        
        var onRepos = function (response) {
            $scope.repos = response.data;
        }

        var onError = function (reason) {
            $scope.error = "Could not fetch the data"
        };

        /*    $http.get("https://api.github.com/users/ravidgolan")
         .then(onUserComplete, onError);*/
        /*$http.get("https://api.github.com/users/ravidgolan")
            .then(onUserComplete, onError);*/

        $scope.search = function (username) {
            $http.get("https://api.github.com/users/" + username)
                .then(onUserComplete, onError);
        };

        $scope.message = "GitHub Viewer:)"
    };

    shuApp.controller("MainController", shuMainController);
    // for minified:
    // shuApp.controller("MainController", ["$scope", "$http", shuMainController]);
}());





