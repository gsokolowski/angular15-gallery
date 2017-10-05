

// In angular everything belongs to module. Module is myApp.
// And we create factory called FilmFactory handled by function GalleryFactory
// not GalleryFactory() - this will cause an error
                                       //(name of dependency, factory function)
angular.module('myApp').factory('GalleryFactory', GalleryFactory);

function GalleryFactory($http) {

    function getGalleryActive() {
        return $http.get('http://laravel-gallery.local/api/gallery/active').then(complete).catch(failed);
    }

    function getGalleryDeleted() {
        return $http.get('http://laravel-gallery.local/api/gallery/deleted').then(complete).catch(failed);
    }

    function deleteGallery(id) {
        return $http.delete('http://laravel-gallery.local/api/gallery/' + id).then(complete).catch(failed);
    }

    function restoreGallery(id) {
        return $http.put('http://laravel-gallery.local/api/gallery/'+ id +'/restore' ).then(complete).catch(failed);
    }


    function complete(response) {
        return response.data;
    }

    function failed(error) {
        return error.statusText;
    }

    // define what factory will be returning as json object
    return {
        getGalleryActive:   getGalleryActive,
        getGalleryDeleted:  getGalleryDeleted,
        deleteGallery:      deleteGallery,
        restoreGallery:     restoreGallery,
    };
}