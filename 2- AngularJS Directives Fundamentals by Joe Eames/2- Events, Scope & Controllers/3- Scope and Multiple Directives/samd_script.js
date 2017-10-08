/**
 * Created by ravid.tanami on 03/10/2017.
 */

angular.module('app', []);

angular.module('app').controller('mainCtrl', function ($scope) {
    /*$scope.user = {
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
    };*/

    $scope.user1 = {
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

    $scope.user2 = {
        name: 'Han Solo',
        address: {
            street: 'PO Box 123',
            city: 'Mos Eisley',
            planet: 'Tattione'
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

    /*$scope.knightMe = function (user) {
        user.rank = "knight";
    }*/
});

angular.module('app').directive('userInfoCard', function () {
    return {
        templateUrl: "samd_userInfoCard.html",
        restrict: "E",
        // scope: true, // inherited scope
        scope: { user: '='}, // isolated scope
        controller: function ($scope) {
            $scope.knightMe = function (user) {
                user.rank = "knight";
            }
        }
    }
});