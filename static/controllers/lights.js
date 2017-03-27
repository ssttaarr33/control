angular.module('mainApp').controller('lights', function ($scope, $http, $resource) {

    $scope.temperature = "11";


    var init = function () {
        var x = $resource('/consoleRead');
        x.get(function (response) {
            var temp = response.tmp;
            temp = temp.replace(/(\r\n|\n|\r)/gm, "");
            $scope.temperature = temp;
            console.log($scope.temperature);
        });

    };

    init();

    $scope.animationsEnabled = true;

    $scope.params = {
        temperature: "",
        keyValue: "",
        invoiceId: "",
        lights: [],
        tasks: [],
        sortReverse: true,
        sortReverse1: true,
        switchLightOn: function () {
            var x = $resource('/turnLightOn');
            x.get(function (response) {
                console.log(response)
            });
            // $http.defaults.headers.Authorization = 'Basic YWRtaW46YnJpZGdl';
            $http({
                method: 'GET',
                url: 'http://192.168.100.11:7474/?cmd=%7B%22api_id%22:1004,%22command%22:%22send_code%22,%22mac%22:%22b4:43:0d:d5:83:96%22,%22data%22:%22260058000001299611141115111411151114101511151114113911391137133911381139123811391139113911391114111411151114111511141016101511391139113812381139110005270001294b11000c620001294b11000d05%22%7D'
                // headers: {
                //     'Authorization': 'Basic YWRtaW46YnJpZGdl'
                // }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.log(response)
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(response)
            });
        },
        switchLightOff: function () {
            var x = $resource('/turnLightOff');
            x.get(function (response) {
                console.log(response)
            });
            $http({
                method: 'GET',
                url: 'http://192.168.100.11:7474/?cmd=%7B%22api_id%22:1004,%22command%22:%22send_code%22,%22mac%22:%22b4:43:0d:d5:83:96%22,%22data%22:%22260050000001299611141115111411151114101610151114113911391139113911391138123812381115113812381214111411151114111411391214111411391139113911391138120005260001294b11000d050000000000000000%22%7D'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.log(response)
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(response)
            });
        },
        flashLight: function () {
            var x = $resource('/flashLight');
            x.get(function (response) {
                console.log(response)
            });
        },
        song: function () {
            var x = $resource('/song');
            x.get(function (response) {
                console.log(response)
            });
        },
        getTemperature: function () {
            var x = $resource('/consoleRead');
            x.get(function (response) {
                var temp = response.tmp;
                temp = temp.replace(/(\r\n|\n|\r)/gm, "");
                $scope.temperature = temp;
                console.log($scope.temperature);
            });
        }
    };
});
