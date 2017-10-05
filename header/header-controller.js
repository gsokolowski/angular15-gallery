
angular.module('myApp').controller('HeaderController', HeaderController);

function HeaderController($scope) {

    $scope.appDetails = {};
    $scope.appDetails.title = "My Library";
}
