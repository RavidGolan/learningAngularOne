/**
 * Created by ravid.tanami on 11/10/2017.
 */

angular.module('app', []);

angular.module('app').controller('mainCtrl', function ($scope) {
    $scope.handlePause = function () {
        console.log("bfsajhfhsd");
    }
});

angular.module('app').directive('eventPause', function () {
    return {
        restrict: 'A', //default
        scope: {
            eventPause: '&'
        },
        link: function(scope, el, attrs) {
            el.on('pause', function (event) {
                scope.$apply(function () {
                    scope.eventPause();
                })
            })

        }
    }
});

angular.module('app').directive('scapebarSupport', function () {
    return {
        restrict: 'A', //default
        link: function(scope, el, attrs) {
            $('body').on('keypress', function (evt) {
                var vidEl = el[0];

                if (evt.keyCode === 32) {
                    if (vidEl.paused) {
                        vidEl.play();
                    }
                    else {
                        vidEl.pause();
                    }
                }
            })
        }
    }
});