/**
 * Created by ravid.tanami on 03/10/2017.
 */
(function () {
    var shuApp = angular.module("githubViewer", ["ngRoute"]);
    shuApp.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "r_main.html",
                controller: "MainController"
            })
            .when("/user/:username", {
                templateUrl: "r_userdetails.html",
                controller: "UserController"
            })
            .when("/repo/:username/:reponame", {
                templateUrl: "r_repo.html",
                controller: "RepoController"
            })
            .otherwise({redirectTo: "/main"})
    });
}());