/**
 * Created by Ayush on 28-Jun-16.
 */
var app = angular.module('myApp',['ngRoute']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider

            .when('/AddNewOrder', {
                templateUrl :'add_details.html',
                controller:'myCtrl'
            })

            .when('/ShowNewOrder', {
                templateUrl :'show_details.html',
                controller:'myAnotherCtrl'
            })

        /*.otherwise({
         redirectTo :'AddNewOrder'
         });*/
    }

]);

app.controller('myCtrl',function($scope){

    $scope.message='this is controller';
    //  alert('add order controller');

    $scope.myFunc = function(){
        $scope.message = 'entered the function';
       // alert('entered into the function');
    }
});

app.controller('myAnotherCtrl',function($scope, $http) {
    $scope.message = 'this is controller';

    var y = document.getElementById('firstPage');
    y.style.display = 'none';

    $http.get("http://www.omdbapi.com/?t=" + $scope.searchtext + "&tomatoes=true&plot=full")
        .then(function(response){ $scope.details = response.data; });

    $http.get("http://www.omdbapi.com/?s=" + $scope.searchtext)
        .then(function(response) {
            $scope.related = response.data;
        });
    
    $scope.myFunc = function () {
        $scope.message = 'entered the another function';
    }
});
