function razdva () {
    var odin = $.getJSON ('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=d5f765edff46a633bc8d184161dbcbe7&photoset_id=72157669686597583&user_id=100124655%40N06&extras=url_s%2C+url_m%2C+url_o&format=json&nojsoncallback=1&auth_token=72157669717065903-1b7522eacc2b11bd&api_sig=22012a46a35a7cab09cc46e5a964e658');
    var photos = popa.responseJSON.photoset.photo;
};




$(document).ready(function() {
    $('#imageGallery').lightGallery({
        mode: 'lg-fade',
        download:false
    })

    $('#imageGallery').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:9,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        },
    });
});