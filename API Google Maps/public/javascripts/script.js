var myApp = angular.module('myApp',[])

var map;
var infowindow;

  myApp.directive("myMaps",function() {

    return{
      restrict: 'E',
      template:'<div></div>',
      replace:true,
      
      link:function(scope, element, attrs){
      var lat = -31.418471;
      var lng = -64.494735;
      
      var myLatLon=new google.maps.LatLng(lat, lng);
      var mapOptions = {
            center: myLatLon,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
            
          };
          map = new google.maps.Map(document.getElementById('map_canvas'),
             mapOptions);
          var service = new google.maps.places.PlacesService(map);
          infowindow = new google.maps.InfoWindow();
          var request1 = {
            location: myLatLon,
            radius: 500,
            sensor:true,
            types: ['police']
          };
          var request2 = {
            location: myLatLon,
            radius: 500,
            sensor:true,
            types: ['bar']
          };
          
          
          service.nearbySearch(request1, callback);
          service.nearbySearch(request2, callback);
          function callback(results, status) { //crea las marcas en funcion del request
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);//llama a la funcion tantas veces como marcas detecte
        }
      }
    }
    function createMarker(place) {
      console.log(place);
      var icons = {
        plice:{icon: 'iconos/automotor.png'},
        establishment:{icon: 'iconos/bar.png'},
               
      };
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: map,  //visible:false,
        icon: icons [place.types[1].icon],
        //icon: 'iconos/bar.png',
        position: place.geometry.location
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
  }
  //google.maps.event.addDomListener(window, 'load', initialize);
      }

    };

  });






