/**
 * Created by nperumal on 8/3/16.
 */
window.app = angular.module('mySite', ['ngRoute']);
window.app.config(['$routeProvider',
        function($routeProvider) {
            //noinspection JSUnresolvedFunction
            $routeProvider.
            when('/', {
                templateUrl: 'app/views/home.html'//,
            }).
            when('/landing', {
                templateUrl: 'app/views/landing.html'//,
            }).
            when('/home', {
                templateUrl: 'app/views/home.html'//,
            }).
            when('/links', {
                templateUrl: 'app/views/links.html'//,
            }).
            when('/contact', {
                templateUrl: 'app/views/contact.html'//,
            }).
            otherwise({
                redirectTo: 'app/views/home.html'
            });
        }
    ]);