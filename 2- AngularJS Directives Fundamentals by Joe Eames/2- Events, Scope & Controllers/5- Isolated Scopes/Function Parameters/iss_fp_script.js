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
        templateUrl: "iss_fp_userInfoCard.html",
        restrict: "E",
        // scope: true, // inherited scope
        // isolated scope
        scope: {
            user: '=',
            /*initialCollapsed: '@',*/
            initialCollapsed: '@collapsed'
        },
        controller: function ($scope) {
            // $scope.collapsed = false;
            $scope.collapsed = ($scope.initialCollapsed === 'true');
            $scope.knightMe = function (user) {
                user.rank = "knight";
            };

            $scope.collapse = function () {
                $scope.collapsed = !$scope.collapsed;
            };

            // remove friend as isolated directive
            $scope.removeFriend = function (friend) {
                var idx = $scope.user.friends.indexOf(friend);
                if (idx > -1) {
                    $scope.user.friends.splice(idx, 1);
                }
            }
        }
        /*controller: function ($scope) {
            // $scope.collapsed = false;
            $scope.collapsedState = ($scope.collapsed === 'true');
            $scope.knightMe = function (user) {
                user.rank = "knight";
            };

            $scope.collapse = function () {
                $scope.collapsedState = !$scope.collapsedState;
            }
        }*/
    }
});

// remove friend as Shared directive
/*angular.module('app').directive('removeFriend', function () {
    return {
        templateUrl: 'iss_fp_removeFriend.html',
        restrict: 'E',
        controller: function ($scope) {
            $scope.removing = false;
            $scope.startRemove = function () {
                $scope.removing = true;
            };
            $scope.cancelRemove = function () {
                $scope.removing = false;
            };
            $scope.removeFriend = function (friend) {
                var idx = $scope.user.friends.indexOf(friend);
                if (idx > -1) {
                    $scope.user.friends.splice(idx, 1);
                }
            }
        }
    }
});*/

// remove friend as isolated directive
angular.module('app').directive('removeFriend', function () {
    return {
        templateUrl: 'iss_fp_removeFriend.html',
        restrict: 'E',
        scope: {
            notifyParent: '&method'
        },
        controller: function ($scope) {
            $scope.removing = false;
            $scope.startRemove = function () {
                $scope.removing = true;
            };
            $scope.cancelRemove = function () {
                $scope.removing = false;
            };
            $scope.confirmRemove = function () {
                $scope.notifyParent();

                // overriding function parameters
                /*$scope.notifyParent({
                    friend: 'Han'
                });*/
            };
        }
    }
});

angular.module('app').directive('address', function () {
    return {
        templateUrl: 'iss_fp_address.html',
        restrict: 'E',
        scope: true,
        // scope: {}, // we can't do that because the user is no longer visible to this address
        controller: function ($scope) {
            $scope.collapsed = false;

            $scope.expand = function () {
                $scope.collapsed = false;
            };

            $scope.collapse = function () {
                $scope.collapsed = true;
            };
        }
    }
});