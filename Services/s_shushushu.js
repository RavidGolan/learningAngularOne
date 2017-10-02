/**
 * Created by ravid.tanami on 02/10/2017.
 */

(function(){
    // [] - dependencies from other modules
    var shuApp = angular.module("githubViewer", []);

    var shuMainController = function ($scope, $http, $interval, $log) {

        var onUserComplete = function(response) {
            $scope.user = response.data;

            $http.get($scope.user.repos_url)
                .then(onRepos, onError)
        };
        
        var onRepos = function (response) {
            $scope.repos = response.data;
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the data"
        };

        var decrementCountdown = function () {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };

        var countdownInterval = null;
        var startCountdown = function () {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.search = function (username) {
            $log.info("Searching for: " + username);
            $http.get("https://api.github.com/users/" + username)
                .then(onUserComplete, onError);
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
        };

        $scope.username = "angular";
        $scope.message = "GitHub Viewer:)";
        $scope.repoSortOrder = "-stargazers_count";
        $scope.countdown = 5;

        startCountdown();
    };

    shuApp.controller("MainController", shuMainController);
    // for minified:
    // shuApp.controller("MainController", ["$scope", "$http", "$interval", shuMainController]);
}());





