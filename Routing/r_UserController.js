/**
 * Created by ravid.tanami on 03/10/2017.
 */
(function(){
    // [] - dependencies from other modules
    var shuApp = angular.module("githubViewer");

    var shuMainController = function ($scope, github, $interval, $log, $anchorScroll, $location) {

        var onUserComplete = function(data) {
            $scope.user = data;

            github.getRepos($scope.user)
                .then(onRepos, onError)
        };

        var onRepos = function (data) {
            $scope.repos = data;

            $location.hash("userDetails");
            $anchorScroll();
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
            github.getUser(username)
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