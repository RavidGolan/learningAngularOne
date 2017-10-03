/**
 * Created by ravid.tanami on 03/10/2017.
 */
(function () {
    var shuApp = angular.module("githubViewer");

    var shuRepoController = function ($scope, github, $routeParams) {
        var onContributors = function (data) {
            $scope.contributors = data;
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the data"
        };

        $scope.username = $routeParams.username;
        $scope.reponame = $routeParams.reponame;
        github.newGetRepo($scope.username, $scope.reponame)
            .then(function (repo) {
                $scope.open_issues = repo.open_issues;

                github.getContributors(repo)
                    .then(onContributors, onError)
            })
    };

    shuApp.controller("RepoController", shuRepoController);
}());