/**
 * Created by ravid.tanami on 01/10/2017.
 */
(function () {

    var app = angular.module("githubViewer", []);

    var MainController = function ($scope, $http) {

        var person = {
            firstName: 'Cute',
            lastName: 'Pappy',
            imageSrc: 'https://68.media.tumblr.com/avatar_29bdba358c83_128.png'
        };
        $scope.person = person;

        var onUserComplete = function (response) {
            $scope.user = response.data;
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the user";
        };

        $http.get("https://api.github.com/users/RavidGolan")
            .then(onUserComplete, onError);

        $scope.message = "Hello, Angular!";

    };

    app.controller("MainController", MainController);

}());