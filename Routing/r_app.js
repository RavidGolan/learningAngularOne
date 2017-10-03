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
            .otherwise({redirectTo:"/main"})
    });
}());