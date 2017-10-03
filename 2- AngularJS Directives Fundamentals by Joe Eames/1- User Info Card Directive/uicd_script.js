/**
 * Created by ravid.tanami on 03/10/2017.
 */

angular.module('app', []);

angular.module('app').controller('mainCtrl', function ($scope) {

});

angular.module('app').directive('userInfoCard', function () {
    return {
        template: "User Info Card",
        restrict: "E"
    }
});