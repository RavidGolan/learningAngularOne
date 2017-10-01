/**
 * Created by ravid.tanami on 28/09/2017.
 */
// document.write("Hello:)")

(function(){
    // [] - dependencies from other modules
    var shuApp = angular.module("githubViewer", []);

    var shuMainController = function ($scope, $http) {
        var person = {
            firstName: 'Sleeping',
            lastName: 'Pappy',
            imageSrc: 'https://i.pinimg.com/736x/6f/ca/f0/6fcaf0ef07eaaa5a229d19245f6de37a--pretty-in-pink-the-pink.jpg'
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

        $scope.message = "Hello:)"
    };

    shuApp.controller("MainController", shuMainController);
    // for minified:
    // shuApp.controller("MainController", ["$scope", "$http", shuMainController]);

}());





