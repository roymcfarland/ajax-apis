$(document).on('ready', function(){
  
  $('button').on('click', function() {
    $('button').removeClass('selected');
    $(this).addClass('selected');
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var $animal = $(this).text();
    var flickrOptions = {
      tags: $animal,
      format: "json"
    };

    function displayPhotos(data) {
      var photoHTML = '<ul>';
        $.each( data.items, function(i, photo){
          photoHTML += '<li class="grid-25 tablet-grid-50">';
          photoHTML += '<a href="' + photo.link + '" class="image">';
          photoHTML += '<img scr="' + photo.media.m + '"></a></li>';
        });
        photoHTML += '</ul>';
        $('#photos').append(photoHTML);
    }
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  
  });
  
}); // end ready