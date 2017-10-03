/**
 * Created by ravid.tanami on 03/10/2017.
 */
(function () {
    var shuApp = angular.module("githubViewer");

    var shuRepoController = function ($scope, $routeParams, github) {
        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        var onRepo = function (data) {
            $scope.repo = data;
        };

        var onError = function (reason) {
            $scope.error = reason;
        };

        github.getRepoDetails(username, reponame)
            .then(onRepo, onError);

    };

    shuApp.controller("RepoController", shuRepoController);
}());