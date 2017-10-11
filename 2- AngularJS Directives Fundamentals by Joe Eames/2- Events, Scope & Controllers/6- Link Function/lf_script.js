/**
 * Created by ravid.tanami on 11/10/2017.
 */

angular.module('app', []);

angular.module('app').controller('mainCtrl', function ($scope) {
    
});

angular.module('app').directive('scapebarSupport', function () {
    return {
        restrict: 'A', //default
        Link: function(scope, el, attrs) {
            $('body').on('keypress', function (evt) {
                if (evt.keyCode === 32) {

                }
            })
        }
    }
});