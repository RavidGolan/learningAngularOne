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
        }
    }
});

angular.module('app').directive('userInfoCard', function () {
    return {
        template: "Name: {{user.name}} <br /> Address: <br />{{user.address.street}} <br />{{user.address.city}}<br />{{user.address.planet}}",
        restrict: "E"
    }
});