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
});

angular.module('app').directive('userInfoCard', function () {
    return {
        // template: "Name: {{user.name}} <br /> <div ng-show='userWithoutAddress.address'>Address: <br />{{user.address.street}} <br />{{user.address.city}}<br />{{user.address.planet}}</div>",
        template: "Name: {{user.name}} <br /><br /> " +
                  "<div ng-show='user.address'>Address: <br />{{user.address.street}} <br />{{user.address.city}}<br />{{user.address.planet}}</div><br />" +
                  "<div>Friends: <div ng-repeat='friend in user.friends'>{{friend}}</div></div>",
        restrict: "E"
    }
});