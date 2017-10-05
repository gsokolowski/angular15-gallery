
angular.module('myApp').controller('DeletedController', DeletedController);

function DeletedController($scope,$location,GalleryFactory) {

    var vm = this;
    // use GalleryFactory to get data
    GalleryFactory.getGalleryDeleted().then(function(response) {

       vm.galleries = response; //response return response.data from FilmFactory
       console.log(vm.galleries);
    });

    // This will hide actionbar div by default.
    $scope.IsVisible = false;
    $scope.ShowHide = function (gallery) {
        $scope.currentGallery = gallery;
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = $scope.IsVisible ? false : true;

    };

    $scope.restoreImage = function () {
        console.log($scope.currentGallery);

        // delete image
        GalleryFactory.restoreGallery($scope.currentGallery.id).then(function(response) {

            // get new list
            GalleryFactory.getGalleryDeleted().then(function(response) {

                vm.galleries = response; //response return response.data from GalleryFactory
                console.log(vm.galleries);
                //$location.path('/deleted');
            });

        });
    };
}

