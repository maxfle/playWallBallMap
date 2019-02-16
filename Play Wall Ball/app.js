function initMap(){
  // Map options
  var options = {
    zoom:8,
    center:{lat:45.511820,lng:-122.660549}
    
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);
  
  // Add marker
  var marker = new google.maps.Marker({
    position:{lat:45.502115,lng:-122.681203},
    map:map,
  });

  var infoWindow = new google.maps.InfoWindow({
    content:'<h2>Lair Hill Park, Portland</h2>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });
  

//   Array of markers
//   var markers = [
//     {
//       coords:{lat:45.502115,lng:-122.681203},
//       content:'<h1>Lair Hill Park, Portland</h1>'
//     }
    // {
    //   coords:{lat:42.8584,lng:-70.9300},
    //   content:'<h1></h1>'
    // },
    // {
    //   coords:{lat:42.7762,lng:-71.0773}
    // }
//   ];

  // Loop through markers
//   for(var i = 0;i < markers.length;i++){
//     // Add marker
//     addMarker(markers[i]);
//   }

//   // Add Marker Function
//   function addMarker(props){
//     var marker = new google.maps.Marker({
//       position:props.coords,
//       map:map,
//       //icon:props.iconImage
//     });

    // // Check for customicon
    // if(props.iconImage){
    //   // Set icon image
    //   marker.setIcon(props.iconImage);
    // }

    // Check content
    // if(props.content){
    //   var infoWindow = new google.maps.InfoWindow({
    //     content:props.content
    //   });

    //   marker.addListener('click', function(){
    //     infoWindow.open(map, marker);
    //   });
    // }
  }
