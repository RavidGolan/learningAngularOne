/**
 * Created by ravid.tanami on 11/10/2017.
 */

angular.module('app', []);

angular.module('app').controller('mainCtrl', function ($scope) {
    $scope.messages = [];

    // with isolated scope
    /*$scope.handlePause = function () {
        console.log("event paused");

        $scope.messages.push({text: "paused!"})
    }*/

    // without isolated scope
    $scope.handlePause = function (e) {
        console.log(e);
        console.log("event paused");

        $scope.messages.push({text: "paused!"})
    }
});

// with isolated scope
/*angular.module('app').directive('eventPause', function () {
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
});*/

// without isolated scope
angular.module('app').directive('eventPause', function ($parse) {
    return {
        restrict: 'A', //default
        link: function(scope, el, attrs) {
            // search for handlePause function on the parent scope and give it back
            var fn = $parse(attrs['eventPause']);
            el.on('pause', function (event) {
                // So its very important whenever you have an event that fires that angular doesn’t know about,
                // such as an HTML elements event, that you start a digest cycle by calling scope.apply
                scope.$apply(function () {
                    // that would create a very tight binding between this directive and the parent directive,
                    // because we would have to know the name of the method on the parent directive
                    // scope.handlePause();

                    // the first parameter is the current scope
                    // and now i can pass in an object, which has a list of parameters to set when it calls the function.
                    fn(scope, {evt: event});
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