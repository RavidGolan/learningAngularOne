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

        var getContributors = function (repo) {
          return $http.get(repo.contributors_url)
              .then(function (response) {
                  return response.data;
              })
        };

        var onError = function (error) {
            console.error("error from github: " + error);
        };

        var newGetRepo = function (username, reponame) {
            return $http.get("https://api.github.com/repos/" + username + "/" + reponame)
                .then(function (response) {
                    return response.data;
                }, onError)
        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            newGetRepo: newGetRepo,
            getContributors: getContributors
        };
    };

    var module = angular.module("githubViewer");
    module.factory("github", shugithub);

}());