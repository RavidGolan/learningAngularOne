/**
 * Created by ravid.tanami on 11/10/2017.
 */

angular.module('app', []);

angular.module('app').controller('mainCtrl', function ($scope) {
    
});

/*angular.module('app').directive('scapebarSupport', function () {
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
});*/

// its the same!
angular.module('app').directive('scapebarSupport', function () {
    return function (scope, el, attrs) {
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
});