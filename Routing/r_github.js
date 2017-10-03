/**
 * Created by ravid.tanami on 3 Oct 2017.
 */
(function () {
    var shugithub = function ($http) {

        var getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function (response) {
                    return response.data;
                });
        };

        var getRepos = function (user) {
            return $http.get(user.repos_url)
                .then(function (response) {
                    return response.data;
                })
        };

        return {
            getUser: getUser,
            getRepos: getRepos
        };
    };

    var module = angular.module("githubViewer");
    module.factory("github", shugithub);

}());