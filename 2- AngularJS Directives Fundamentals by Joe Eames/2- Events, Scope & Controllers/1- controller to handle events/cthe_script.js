/**
 * Created by ravid.tanami on 03/10/2017.
 */

angular.module('app', []);

angular.module('app').controller('mainCtrl', function ($scope) {
    $scope.user = {
        name: 'Luke Skywalker',
        address: {
            street: 'PO Box 123',
            city: 'Secret Rabel Base',
            planet: 'Yarin 4'
        },
        friends: [
            'Han',
            'Leia',
            'Chewbacca'
        ]
    };

    $scope.userWithoutAddress = {
        name: 'Ravid Golan'
    }

    $scope.knightMe = function (user) {
        user.rank = "knight";
    }
});

angular.module('app').directive('userInfoCard', function () {
    return {
        templateUrl: "cthe_userInfoCard.html",
        restrict: "E"
    }
});