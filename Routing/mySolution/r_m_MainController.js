/**
 * Created by ravid.tanami on 3 Oct 2017.
 */

(function(){
    // [] - dependencies from other modules
    var shuApp = angular.module("githubViewer");

    var shuMainController = function ($scope, $interval, $location) {

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
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }

            // go the the next route- user view
            // change the client fragment to #/user/someuser
            $location.path("/user/" + username);
        };

        $scope.username = "angular";
        $scope.countdown = 5;

        startCountdown();
    };

    shuApp.controller("MainController", shuMainController);
    // for minified:
    // shuApp.controller("MainController", ["$scope", "$http", "$interval", shuMainController]);
}());