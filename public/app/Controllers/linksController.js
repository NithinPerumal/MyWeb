/**
 * Created by nperumal on 8/4/16.
 */
app.controller("linksCtrl", ['$scope', '$location', '$http', '$q', '$window', function($scope, $location, $http, $q, $window) {

    console.log("linksCtrl");

    $scope.redirectToGithub = function() {
        console.log("Redirecting to GitHub");
        $window.open("https://github.com/NithinPerumal/");
    };

    $scope.redirectToLinkedIn = function() {
        console.log("Redirecting to LinkedIn");
        $window.open("https://www.linkedin.com/in/nithin-perumal-1268b8a9");
    };

}]);