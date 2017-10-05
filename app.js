// route provider allows you to setup routes for your application
// Documentation  https://docs.angularjs.org/api/ngRoute/provider/$routeProvider

// this is a module setter syntax
var App = angular.module('myApp', ['ngRoute']);   // inject angular route library as dependency of module
                    // call a config method on angular module
                                    // and config method will execute config function which you need to specify below

App.config(function($routeProvider) {

    // $routeProvider is build in service another service is $http which is used in active/active-controller.js
    // and deleted/deleted-controller.js

    // templates as files
    $routeProvider.when('/', {
        templateUrl: 'active/active.html',
        controller: 'ActiveController', // active/active-controller.js in loaded in index.html
        controllerAs: 'vm'

    }).when('/active', {
        templateUrl: 'active/active.html',
        controller: 'ActiveController', // active/active-controller.js in loaded in index.html
        controllerAs: 'vm'

    }).when('/deleted', {
        templateUrl: 'deleted/deleted.html',
        controller: 'DeletedController', // deleted/deleted-controller.js in loaded in index.html
        controllerAs: 'vm'

    }).when('/404', {
        templateUrl: '404/404.html',
    }).otherwise({
        redirectTo: '/404' // go to 404
    });

});
