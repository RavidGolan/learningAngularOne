/**
 * Created by ravid.tanami on 03/10/2017.
 */
(function(){
    // [] - dependencies from other modules
    var shuApp = angular.module("githubViewer");

    var shuUserController = function ($scope, github, $routeParams, $location) {

        var onUserComplete = function(data) {
            $scope.user = data;

            github.getRepos($scope.user)
                .then(onRepos, onError)
        };

        var onRepos = function (data) {
            $scope.repos = data;
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the data"
        };

        $scope.username = $routeParams.username;
        $scope.repoSortOrder = "-stargazers_count";
        github.getUser($scope.username)
            .then(onUserComplete, onError);

        $scope.searchRepo = function (reponame) {
            debugger;
            $location.path("/repos/" + $scope.username + '/' + reponame);
        }
    };

    shuApp.controller("UserController", shuUserController);
    // for minified:
    // shuApp.controller("MainController", ["$scope", "$http", "$interval", shuMainController]);
}());