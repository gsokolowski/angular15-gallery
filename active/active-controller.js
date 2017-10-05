
angular.module('myApp').controller('ActiveController', ActiveController);
                        // dependecy injection GalleryFactory
function ActiveController($scope, $http, $location, GalleryFactory) {

    var vm = this;
    // use GalleryFactory to get data
    GalleryFactory.getGalleryActive().then(function(response) {

        vm.galleries = response; //response return response.data from GalleryFactory
        console.log(vm.galleries);
    });

    // This will hide actionbar div by default.
    $scope.IsVisible = false;
    $scope.ShowHide = function (gallery) {
        $scope.currentGallery = gallery;
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = $scope.IsVisible ? false : true;

    };

    $scope.deleteImage = function () {
        //console.log($scope.currentGallery);

        // delete image
        GalleryFactory.deleteGallery($scope.currentGallery.id).then(function(response) {

            // get new list
            GalleryFactory.getGalleryActive().then(function(response) {

                vm.galleries = response; //response return response.data from GalleryFactory
                console.log(vm.galleries);
                //$location.path('/active');
            });

        });
    };

    $scope.downloadImage = function() {

        var imagePath = 'http://laravel-gallery.local/images/' + $scope.currentGallery.image;

        $http.get(imagePath, {
            responseType: "arraybuffer"
        })
            .success(function(data) {
                var anchor = angular.element('<a/>');
                var blob = new Blob([data]);
                anchor.attr({
                    href: window.URL.createObjectURL(blob),
                    target: '_blank',
                    download: $scope.currentGallery.image
                })[0].click();
            })
    }
}
