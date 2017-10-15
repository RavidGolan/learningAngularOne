/**
 * Created by ravid.tanami on 11/10/2017.
 */

angular.module('app', []);

angular.module('app').controller('mainCtrl', function ($scope) {
    $scope.messages = [];


    $scope.handlePause = function () {
        console.log("event paused");

        $scope.messages.push({text: "paused!"})
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
                // So its very important whenever you have an event that fires that angular doesn’t know about,
                // such as an HTML elements event, that you start a digest cycle by calling scope.apply
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