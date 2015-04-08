var myApp = angular.module('myApp',[])
  
  var map; 
  var gastronomia = [];
  var entretenimiento = [];
  var profecionales = [];
  var hogar = []; 
  var abastecimiento = [];
  var educacion = [];
  var saludbelleza= [];
  var construccion = [];
  var automotor = [];
  var tecnologia = [];
  var indumentaria = []; 
     
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
          map = new google.maps.Map(document.getElementById(attrs.id),
             mapOptions);
           

      }

    };

  });
  myApp.controller("ControllerCargarMarcas", function($scope, $http) {
    $http.get('json/comercios.json').success(function(data) {
      //$scope.comercios tiene los datos de comercios.json en forma de array de propiedades (name, type, lat,lng)
      $scope.comercios = data;
      //var marcas=[];
      //este objeto icons tiene todas las rutas de las imagenes .png de los iconos en funcion del rubro
      
      var icons = {
        Accesorios:{icon: '/iconos/accesorios.png'},
        Almacen:{icon: '/iconos/almacen.png'},
        Artesania:{icon: '/iconos/artesania.png'},
        Automotor:{icon: '/iconos/ automotor.png'},
        Bar:{icon: '/iconos/bar.png'},
        Capacitacion:{icon: '/iconos/capacitacion.png'},
        Carniceria:{icon: '/iconos/carniceria.png'},
        Clinica:{icon: '/iconos/clinica.png'},
        Colegio:{icon: '/iconos/colegio.png'},
        Combustible:{icon: '/iconos/combustible.png'},
        Confiteria:{icon: '/iconos/confiteria.png'},
        Construccion:{icon: '/iconos/construccion.png'},
        Empresa:{icon: '/iconos/empresa.png'},
        Estacionamiento:{icon: '/iconos/estacionamiento.png'},
        Estetica:{icon: '/iconos/estetica.png'},
        Evento:{icon: '/iconos/evento.png'},
        Farmacia:{icon: '/iconos/farmacia.png'},
        Fastfood:{icon: '/iconos/fastfood.png'},
        Fiambreria:{icon: '/iconos/fiambreria.png'},
        Fotografia:{icon: '/iconos/fotografia.png'},
        Heladeria:{icon: '/iconos/heladeria.png'},
        Idioma:{icon: '/iconos/idioma.png'},
        Inmobiliaria:{icon: '/iconos/inmobiliaria.png'},
        Indumentaria:{icon: '/iconos/indumentaria.png'},
        Joyeria:{icon: '/iconos/joyeria.png'},
        Jugueteria:{icon: '/iconos/jugueteria.png'},
        Kiosko:{icon: '/iconos/kiosko.png'},
        Lavauto:{icon: '/iconos/lavauto.png'},
        Libreria:{icon: '/iconos/libreria.png'},
        Lomiteria:{icon: '/iconos/lomiteria.png'},
        Panaderia:{icon: '/iconos/panaderia.png'},
        Peluqueria:{icon: '/iconos/peluqueria.png'},
        Pizzeria:{icon: '/iconos/pizzeria.png'},
        Restaurant:{icon: '/iconos/restaurant.png'},
        Rotiseria:{icon: '/iconos/rotiseria.png'},
        Servicios:{icon: '/iconos/servicios.png'},
        Tecnologia:{icon: '/iconos/tecnologia.png'},
        Verduleria:{icon: '/iconos/verduleria.png'},
        Viaje:{icon: '/iconos/viaje.png'},
        Zapateria:{icon: '/iconos/zapateria.png'}
        
      };  
        
   
      //el ciclo for recorre el arreglo de marcas scope.comercios y genera "x" cantidad de markers..
        for(i=0; i<$scope.comercios.length; i++){
            //lats[i] = $scope.comercios[i].lat;
            //longs[i] = $scope.comercios[i].lng;
            var marcador=new google.maps.Marker({
              position: new google.maps.LatLng($scope.comercios[i].lat,$scope.comercios[i].lng),
              map:map,
              visible:false,
              tipo : $scope.comercios[i].type,
              //animation: google.maps.Animation.DROP ,
              title: $scope.comercios[i].name,
              icon: icons[$scope.comercios[i].type].icon
              
          });//cierra marcador
            var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';
      


            

            console.log($scope.comercios[i].type);
            switch($scope.comercios[i].type) {
              case 'Heladeria':
                  gastronomia.push(marcador);break;
                  var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
                  google.maps.event.addListener(marcador, 'click', function() {
                    infowindow.open(map,marcador);
                    });//un objeto(marcador) un eneveto (click) y una funcion que se ejecuta cuando se produce el evneto
              case 'Construccion':
                  construccion.push(marcador);break;
              case 'Accesorios':
                  indumentaria.push(marcador);break;
              case 'Almacen':
                  abastecimiento.push(marcador);break;
              case 'Artesania':
                  entretenimiento.push(marcador);break;
              case 'Automotor':
                  automotor.push(marcador);break;
              case 'Bar':
                  gastronomia.push(marcador);break;
              case 'Capacitacion':
                  educacion.push(marcador);break;
              case 'Confiteria':
                  gastronomia.push(marcador);break;                        
              case 'Combustible':
                  automotor.push(marcador);break;
              case 'Carniceria':
                  abastecimiento.push(marcador);break;    
              case 'Colegio':
                  educacion.push(marcador);break;
              case 'Clinica':
                  saludbelleza.push(marcador);break;  
              case 'Evento':
                  entretenimiento.push(marcador);break;
              case 'Estetica':
                  saludbelleza.push(marcador);break;
              case 'Estacionamiento':
                  automotor.push(marcador);break;
              case 'Empresa':
                  profecionales.push(marcador);break;
              case 'Farmacia':
                  saludbelleza.push(marcador);break;    
              case 'Fotografia':
                  entretenimiento.push(marcador);break;
              case 'Fiambreria':
                  abastecimiento.push(marcador);break;                                  
              case 'Fastfood':
                  gastronomia.push(marcador);break;
              case 'Indumentaria':
                  indumentaria.push(marcador);break;
              case 'Inmobiliaria':
                  hogar.push(marcador);break;
              case 'Idioma':
                  educacion.push(marcador);break;
              case 'Jugueteria':
                  entretenimiento.push(marcador);break;
              case 'Kiosko':
                  abastecimiento.push(marcador);break;
              case 'Lomiteria':
                  gastronomia.push(marcador);break;
              case 'Libreria':
                  educacion.push(marcador);break; 
              case 'Lavauto':
                  automotor.push(marcador);break;
              case 'Pizzeria':
                  gastronomia.push(marcador);break;
              case 'Peluqueria':
                  saludbelleza.push(marcador);break;
              case 'Panaderia':
                  abastecimiento.push(marcador);break; 
              case 'Rotiseria':
                  gastronomia.push(marcador);break;
              case 'Restaurant':
                  gastronomia.push(marcador);break;
              case 'Servicios':
                  hogar.push(marcador);break;
              case 'Tecnologia':
                  tecnologia.push(marcador);break;   
              case 'Zapateria':
                  indumentaria.push(marcador);break; 
              case 'Verduleria':
                  abastecimiento.push(marcador);break; 
              case 'Viaje':
                  entretenimiento.push(marcador);break;                                                                        
            }

            
            //show el marcador en el mapa
            
            //marcador.setMap(map);
        }

        //marcas.setVisible(true);
    }).//cierra http
    error(function(data, status, headers, config) {
    });


  });//cierra miapp

  myApp.controller("ControllerRubro",function($scope,$http){
    
    $scope.gastronomia = false;
    $scope.abastecimiento = false;
    $scope.educacion = false;
    $scope.saludbelleza= false;
    $scope.construccion = false;
    $scope.hogar = false;
    $scope.entretenimiento = false;
    $scope.automotor = false;
    $scope.tecnologia = false;
    $scope.indumentaria = false;
    $scope.profecionales = false;
    $scope.Gastronomia = function () {
      $scope.gastronomia = !$scope.gastronomia;
    
      for(i=0; i<gastronomia.length; i++) {  
        if ($scope.gastronomia==true) {gastronomia[i].setVisible(true);}
        else{gastronomia[i].setVisible(false);};        
      }; 
    }
    $scope.Construccion = function () {
      $scope.construccion = !$scope.construccion;
    
      for(i=0; i<construccion.length; i++) {  
        if ($scope.construccion==true) {construccion[i].setVisible(true);}
        else{construccion[i].setVisible(false);};        
      }; 
    }
    $scope.Abastecimiento = function () {
      $scope.abastecimiento = !$scope.abastecimiento;
    
      for(i=0; i<abastecimiento.length; i++) {  
        if ($scope.abastecimiento==true) {abastecimiento[i].setVisible(true);}
        else{abastecimiento[i].setVisible(false);};        
      }; 
    }
    $scope.Educacion = function () {
      $scope.educacion = !$scope.educacion;
    
      for(i=0; i<Educacion.length; i++) {  
        if ($scope.educacion==true) {educacion[i].setVisible(true);}
        else{educacion[i].setVisible(false);};        
      }; 
    }
    $scope.SaludBelleza = function () {
      $scope.saludbelleza= !$scope.saludbelleza;
    
      for(i=0; i<saludbelleza.length; i++) {  
        if ($scope.saludbelleza==true) {saludbelleza[i].setVisible(true);}
        else{saludbelleza[i].setVisible(false);};        
      }; 
    }
    $scope.Hogar = function () {
      $scope.hogar = !$scope.hogar;
    
      for(i=0; i<hogar.length; i++) {  
        if ($scope.hogar==true) {hogar[i].setVisible(true);}
        else{hogar[i].setVisible(false);};        
      }; 
    }
    $scope.Entretenimiento= function () {
      $scope.entretenimiento = !$scope.entretenimiento;
    
      for(i=0; i<entretenimiento.length; i++) {  
        if ($scope.entretenimiento==true) {entretenimiento[i].setVisible(true);}
        else{entretenimiento[i].setVisible(false);};        
      }; 
    }
    $scope.Automotores= function () {
      $scope.automotor = !$scope.automotor;
    
      for(i=0; i<automotor.length; i++) {  
        if ($scope.automotor==true) {automotor[i].setVisible(true);}
        else{automotor[i].setVisible(false);};        
      }; 
    }
    $scope.Tecnologia= function () {
      $scope.tecnologia = !$scope.tecnologia;
    
      for(i=0; i<tecnologia.length; i++) {  
        if ($scope.tecnologia==true) {tecnologia[i].setVisible(true);}
        else{tecnologia[i].setVisible(false);};        
      }; 
    }
    $scope.Indumentaria= function () {
      $scope.indumentaria = !$scope.indumentaria;
    
      for(i=0; i<indumentaria.length; i++) {  
        if ($scope.indumentaria==true) {indumentaria[i].setVisible(true);}
        else{indumentaria[i].setVisible(false);};        
      }; 
    }
    $scope.Profecionales= function () {
      $scope.profecionales = !$scope.profecionales;
    
      for(i=0; i<profecionales.length; i++) {  
        if ($scope.profecionales==true) {profecionales[i].setVisible(true);}
        else{profecionales[i].setVisible(false);};        
      }; 
    }

  });
/*
  myApp.controller("ControllerZona", function($scope, $http) {
    
    $scope.Zlacalera = function() {
      var lc = new google.maps.LatLng(-31.349554, -64.338966);
      map.setCenter(lc);                
    }
    $scope.Zcarlospaz = function() {
      var cp = new google.maps.LatLng(-31.418471, -64.494735);
      map.setCenter(cp);
    }
  });
*/
  

 